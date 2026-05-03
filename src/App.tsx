import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw, 
  Trophy, 
  XCircle,
  ArrowLeft,
  GraduationCap,
  Cpu,
  Star,
  FileText,
  Timer,
  Users,
  LogOut,
  Mail,
  User as UserIcon,
  ShieldCheck,
  Search,
  History,
  Zap,
  Target,
  Activity,
  UserCheck,
  Clock
} from 'lucide-react';
import { 
  onAuthStateChanged, 
  signOut, 
  User 
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  Timestamp,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';
import { auth, db, signInWithGoogle } from './lib/firebase';
import { Question, QuizState, UserProgress, QuizSubmission } from './types';
import { ELECTRONICS_QUIZ } from './data/electronicsQuestions';
import { MODERN_PHYSICS_QUIZ } from './data/modernPhysicsQuestions';
import { ATOMIC_SPECTRA_QUIZ } from './data/atomicSpectraQuestions';
import { NUCLEAR_PHYSICS_QUIZ } from './data/nuclearPhysicsQuestions';
import { WAVES_QUIZ } from './data/wavesQuestions';


export type Chapter = {
  id: string;
  name: string;
  subtitle: string;
  icon: any;
  questions: any[];
  timePerQuestion: number;
};

export const CURRICULUM = {
  physics: {
    id: 'physics',
    name: 'Physics',
    icon: Zap,
    grades: {
      '11': {
        name: 'Grade 11 (FSc Part 1)',
        chapters: [
          { id: 'measurements', name: 'Measurements', subtitle: 'Chapter 1: Physical Quantities and Units', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'vectors', name: 'Vectors and Equilibrium', subtitle: 'Chapter 2: Vectors and Equilibrium', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'motion', name: 'Motion and Force', subtitle: 'Chapter 3: Motion and Force', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'work', name: 'Work and Energy', subtitle: 'Chapter 4: Work and Energy', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'circular-motion', name: 'Circular Motion', subtitle: 'Chapter 5: Circular Motion', icon: RotateCcw, questions: [], timePerQuestion: 60 },
          { id: 'fluid-dynamics', name: 'Fluid Dynamics', subtitle: 'Chapter 6: Fluid Dynamics', icon: FileText, questions: [], timePerQuestion: 60 },
          { id: 'oscillations', name: 'Oscillations', subtitle: 'Chapter 7: Oscillations', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'waves', name: 'Waves', subtitle: 'Chapter 8: Waves', icon: Zap, questions: WAVES_QUIZ, timePerQuestion: 60 },

          { id: 'physical-optics', name: 'Physical Optics', subtitle: 'Chapter 9: Physical Optics', icon: Star, questions: [], timePerQuestion: 60 },
          { id: 'optical-instruments', name: 'Optical Instruments', subtitle: 'Chapter 10: Optical Instruments', icon: Search, questions: [], timePerQuestion: 60 },
          { id: 'thermodynamics', name: 'Heat and Thermodynamics', subtitle: 'Chapter 11: Heat and Thermodynamics', icon: Activity, questions: [], timePerQuestion: 60 },
        ] as Chapter[]
      },
      '12': {
        name: 'Grade 12 (FSc Part 2)',
        chapters: [
          { id: 'electrostatics', name: 'Electrostatics', subtitle: 'Chapter 12: Electrostatics', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'current-electricity', name: 'Current Electricity', subtitle: 'Chapter 13: Current Electricity', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'electromagnetism', name: 'Electromagnetism', subtitle: 'Chapter 14: Electromagnetism', icon: Zap, questions: [], timePerQuestion: 60 },
          { id: 'electromagnetic-induction', name: 'Electromagnetic Induction', subtitle: 'Chapter 15: Electromagnetic Induction', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'alternating-current', name: 'Alternating Current', subtitle: 'Chapter 16: Alternating Current', icon: Activity, questions: [], timePerQuestion: 60 },
          { id: 'physics-of-solids', name: 'Physics of Solids', subtitle: 'Chapter 17: Physics of Solids', icon: Target, questions: [], timePerQuestion: 60 },
          { id: 'electronics', name: 'Electronics', subtitle: 'Chapter 18: Semiconductors and Systems', icon: Cpu, questions: ELECTRONICS_QUIZ, timePerQuestion: 60 },
          { id: 'modern-physics', name: 'Dawn of Modern Physics', subtitle: 'Chapter 19: Relativistic and Quantum Phenomena', icon: Star, questions: MODERN_PHYSICS_QUIZ, timePerQuestion: 60 },
          { id: 'atomic-spectra', name: 'Atomic Spectra', subtitle: 'Chapter 20: Hydrogen Spectrum and Lasers', icon: Zap, questions: ATOMIC_SPECTRA_QUIZ, timePerQuestion: 60 },
          { id: 'nuclear-physics', name: 'Nuclear Physics', subtitle: 'Chapter 21: Radioactivity and Nuclear Energy', icon: Target, questions: NUCLEAR_PHYSICS_QUIZ, timePerQuestion: 60 },
        ] as Chapter[]
      }
    }
  }
};

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface LiveProgress {
  studentEmail: string;
  studentName: string;
  sectionName: string;
  currentQuestionIndex: number;
  totalQuestions: number;
  score: number;
  lastUpdated: number;
  isFinished: boolean;
}

export default function App() {
  const [state, setState] = useState<QuizState>('welcome');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [studentInfo, setStudentInfo] = useState<{ name: string; email: string } | null>(null);
  const [activeSection, setActiveSection] = useState<Chapter | null>(null);
  const [browseStep, setBrowseStep] = useState<'subject' | 'grade' | 'chapter'>('subject');
  const [selectedSubject, setSelectedSubject] = useState<keyof typeof CURRICULUM | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<'11' | '12' | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [submissions, setSubmissions] = useState<QuizSubmission[]>([]);
  const [liveMonitor, setLiveMonitor] = useState<LiveProgress[]>([]);
  const [adminTab, setAdminTab] = useState<'submissions' | 'live'>('submissions');
  const [loading, setLoading] = useState(true);
  
  const [progress, setProgress] = useState<UserProgress>({
    currentQuestionIndex: 0,
    answers: {},
    isFinished: false,
    score: 0,
  });

  // Auth & Student Info Sync
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user && user.email) {
        try {
          const studentDoc = await getDoc(doc(db, 'students', user.email));
          if (studentDoc.exists()) {
            setStudentInfo(studentDoc.data() as { name: string; email: string });
          } else {
            setState('register');
          }
        } catch (error) {
          console.error("Error fetching student info:", error);
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Timer logic
  useEffect(() => {
    let timer: number;
    if (state === 'quiz' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            submitQuiz(progress.answers, progress.score);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [state, timeLeft]);

  const startQuiz = (section: Chapter) => {
    if (section.questions.length === 0) {
      alert("This chapter's questions are coming soon!");
      return;
    }
    if (!currentUser) {
      signInWithGoogle();
      return;
    }
    if (!studentInfo) {
      setState('register');
      return;
    }
    setActiveSection(section);
    setQuestions(section.questions);
    setTimeLeft(section.questions.length * section.timePerQuestion);
    
    const initialProgress: UserProgress = {
      currentQuestionIndex: 0,
      answers: {},
      isFinished: false,
      score: 0,
      startTime: Date.now(),
    };
    setProgress(initialProgress);
    setState('quiz');

    // Initialize live progress
    updateLiveProgress(initialProgress, section, false);
  };

  const updateLiveProgress = async (currentProgress: UserProgress, section: Chapter, finished: boolean) => {
    if (!studentInfo || !currentUser?.email) return;
    
    try {
      const liveData: LiveProgress = {
        studentEmail: studentInfo.email,
        studentName: studentInfo.name,
        sectionName: section.name,
        currentQuestionIndex: currentProgress.currentQuestionIndex,
        totalQuestions: section.questions.length,
        score: currentProgress.score,
        lastUpdated: Date.now(),
        isFinished: finished
      };
      await setDoc(doc(db, 'live_progress', studentInfo.email), liveData);
    } catch (error) {
      console.error("Error updating live progress:", error);
    }
  };

  const handleAnswer = (answer: string) => {
    const currentQuestion = questions[progress.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    const newAnswers = { ...progress.answers, [currentQuestion.id]: answer };
    const newScore = isCorrect ? progress.score + 1 : progress.score;

    if (progress.currentQuestionIndex < questions.length - 1) {
      const newProgress = {
        ...progress,
        answers: newAnswers,
        score: newScore,
        currentQuestionIndex: progress.currentQuestionIndex + 1,
      };
      setProgress(newProgress);
      if (activeSection) {
        updateLiveProgress(newProgress, activeSection, false);
      }
    } else {
      submitQuiz(newAnswers, newScore);
    }
  };

  const submitQuiz = async (finalAnswers: Record<string, string>, finalScore: number) => {
    const finalProgress = {
      ...progress,
      answers: finalAnswers,
      score: finalScore,
      isFinished: true,
    };
    setProgress(finalProgress);
    setState('results');

    if (studentInfo && activeSection) {
      // Mark as finished in live progress
      updateLiveProgress(finalProgress, activeSection, true);

      const submission: Omit<QuizSubmission, 'id'> = {
        studentEmail: studentInfo.email,
        studentName: studentInfo.name,
        score: finalScore,
        total: questions.length,
        sectionName: activeSection.name,
        submittedAt: Date.now(),
      };
      try {
        await addDoc(collection(db, 'submissions'), submission);
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, 'submissions');
      }
    }
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!currentUser || !currentUser.email) return;
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = currentUser.email;

    const newStudent = { name, email, registeredAt: new Date().toISOString() };
    try {
      await setDoc(doc(db, 'students', email), newStudent);
      setStudentInfo({ name, email });
      setState('welcome');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `students/${email}`);
    }
  };

  const loadAdminData = async () => {
    if (currentUser?.email !== 'sfkshahfahadkhan@gmail.com') return;
    setLoading(true);
    try {
      const q = query(collection(db, 'submissions'), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const results: QuizSubmission[] = [];
      querySnapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() } as QuizSubmission);
      });
      setSubmissions(results);
      setState('admin');

      // Set up live monitor listener
      const liveQuery = query(collection(db, 'live_progress'), orderBy('lastUpdated', 'desc'));
      const unsubscribe = onSnapshot(liveQuery, (snapshot) => {
        const liveResults: LiveProgress[] = [];
        snapshot.forEach((doc) => {
          liveResults.push(doc.data() as LiveProgress);
        });
        setLiveMonitor(liveResults);
      }, (error) => {
        handleFirestoreError(error, OperationType.LIST, 'live_progress');
      });

      return () => unsubscribe();
    } catch (error) {
      handleFirestoreError(error, OperationType.LIST, 'submissions');
    } finally {
      setLoading(false);
    }
  };

  const clearFinishedProgress = async (email: string) => {
    try {
      await deleteDoc(doc(db, 'live_progress', email));
    } catch (error) {
      console.error("Error clearing progress:", error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isAdmin = currentUser?.email === 'sfkshahfahadkhan@gmail.com';

  if (loading) {
    return (
      <div className="min-h-screen bg-sfk-cream flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sfk-green-dark"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-gold/20 relative overflow-x-hidden">
      <div className="watermark" />

      <header className="fixed top-0 left-0 right-0 h-24 bg-white shadow-xl border-b-4 border-brand-gold z-50 flex items-center justify-between px-8">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setState('welcome')}>
          <div className="p-0.5 rounded-full shadow-md border-2 border-slate-100 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="SFK Academy Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="heading-serif text-3xl font-black text-brand-green leading-none">SFK</span>
            <span className="heading-serif text-sm text-brand-green font-bold tracking-tight mt-0.5 opacity-80">Academy</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {isAdmin && state !== 'admin' && (
            <button 
              onClick={loadAdminData}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-sfk-green-dark text-white rounded-lg font-bold text-xs hover:bg-sfk-green-mid transition-all shadow-md"
            >
              <ShieldCheck className="w-4 h-4" /> ADMIN PANEL
            </button>
          )}
          {currentUser ? (
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-sm font-black text-brand-green">{studentInfo?.name || currentUser.displayName}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{currentUser.email}</span>
              </div>
              <button 
                onClick={() => signOut(auth)}
                className="p-2 hover:bg-red-50 text-red-500 rounded-full transition-all"
                title="Logout"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          ) : (
            <button 
              onClick={signInWithGoogle}
              className="bg-brand-green text-brand-gold px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
            >
              Log In
            </button>
          )}
        </div>
      </header>

      <main className="pt-40 pb-16 px-6 max-w-5xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {state === 'welcome' && (
            <motion.div key="welcome" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-16">
              <div className="text-center space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green text-brand-gold rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                  <FileText className="w-4 h-4" />
                  Textbook Series Assessment
                </div>
                <h1 className="heading-serif text-5xl md:text-7xl font-black text-brand-green tracking-tight leading-[1.1]">
                  Self-Assessment <br />
                  <span className="text-brand-gold text-4xl md:text-6xl italic">Academy Portal</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Rigorous preparation for MDCAT & CAIE candidates. Please sign in to begin your assessment track.
                </p>
              </div>

              {browseStep !== 'subject' && (
                <button 
                  onClick={() => {
                    if (browseStep === 'chapter') setBrowseStep('grade');
                    else if (browseStep === 'grade') setBrowseStep('subject');
                  }}
                  className="flex items-center gap-2 text-brand-green font-bold hover:translate-x-[-4px] transition-transform mx-auto md:mx-0"
                >
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {browseStep === 'subject' && Object.values(CURRICULUM).map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setSelectedSubject(subject.id as keyof typeof CURRICULUM);
                      setBrowseStep('grade');
                    }}
                    className="group relative p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-brand-green hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-green group-hover:bg-brand-gold transition-colors" />
                    <div className="bg-brand-green/5 text-brand-green w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all shadow-inner">
                      <subject.icon className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-3xl text-brand-green">{subject.name}</h3>
                      <p className="text-slate-500 font-bold text-sm mt-1">Select subject to view curriculum</p>
                    </div>
                    <ChevronRight className="w-8 h-8 text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}

                {browseStep === 'grade' && selectedSubject && Object.entries(CURRICULUM[selectedSubject].grades).map(([gradeKey, gradeData]) => (
                  <button
                    key={gradeKey}
                    onClick={() => {
                      setSelectedGrade(gradeKey as '11' | '12');
                      setBrowseStep('chapter');
                    }}
                    className="group relative p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-brand-green hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-gold group-hover:bg-brand-green transition-colors" />
                    <div className="bg-brand-gold/10 text-brand-gold w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-white transition-all shadow-inner">
                      <GraduationCap className="w-10 h-10" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-2xl text-brand-green">{gradeData.name}</h3>
                      <p className="text-slate-500 font-bold text-sm mt-1">{gradeData.chapters.length} Chapters</p>
                    </div>
                    <ChevronRight className="w-8 h-8 text-brand-green group-hover:translate-x-2 transition-all" />
                  </button>
                ))}

                {browseStep === 'chapter' && selectedSubject && selectedGrade && CURRICULUM[selectedSubject].grades[selectedGrade].chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    onClick={() => startQuiz(chapter)}
                    className="group relative p-8 bg-white border-2 border-slate-100 rounded-3xl hover:border-brand-green hover:shadow-2xl hover:-translate-y-1 transition-all text-left flex items-center gap-8 shadow-sm overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-3 h-full bg-brand-green group-hover:bg-brand-gold transition-colors" />
                    <div className="bg-brand-green/5 text-brand-green w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-green group-hover:text-white transition-all shadow-inner">
                      <chapter.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-serif font-black text-xl text-brand-green">{chapter.name}</h3>
                      <p className="text-slate-500 font-bold text-xs mt-1">{chapter.subtitle}</p>
                      <div className="mt-3 flex items-center gap-2">
                        {chapter.questions.length > 0 ? (
                          <>
                            <span className="flex items-center gap-1 px-2 py-1 bg-brand-gold/10 text-brand-gold rounded font-black text-[10px] uppercase tracking-tighter">
                              <Timer className="w-3 h-3" /> {chapter.questions.length * chapter.timePerQuestion / 60}m
                            </span>
                            <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded font-black text-[10px] uppercase tracking-tighter">
                              {chapter.questions.length} MCQs
                            </span>
                          </>
                        ) : (
                          <span className="px-2 py-1 bg-slate-100 text-slate-400 rounded font-black text-[10px] uppercase tracking-widest">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-brand-gold group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {state === 'register' && (
            <motion.div key="register" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl mx-auto bg-white p-12 rounded-[40px] shadow-2xl border-4 border-slate-50">
              <div className="text-center space-y-6">
                <div className="inline-flex p-5 bg-brand-gold/20 text-brand-gold rounded-full">
                  <UserIcon className="w-10 h-10" />
                </div>
                <h2 className="heading-serif text-4xl font-black text-brand-green">Student Bio-Data</h2>
                <p className="text-slate-500 font-bold">Complete your profile to track your academic progress across modules.</p>
                <form onSubmit={handleRegister} className="space-y-6 pt-6">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Academic Name</label>
                    <input name="name" required className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-brand-green outline-none font-bold placeholder:text-slate-300" placeholder="e.g. Abdullah S." />
                  </div>
                  <div className="space-y-2 text-left opacity-50">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Verified Email</label>
                    <input disabled value={currentUser?.email || ''} className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold cursor-not-allowed" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-brand-green text-brand-gold rounded-2xl font-black text-lg hover:bg-brand-green-hover transition-all shadow-xl">
                    Create Academic Record
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {state === 'quiz' && (
            <motion.div key="quiz" className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-center justify-between bg-white p-6 rounded-3xl shadow-xl border-b-4 border-brand-gold relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-2 bg-brand-green" />
                <div className="flex items-center gap-6">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${timeLeft < 60 ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-slate-50 text-slate-600'}`}>
                    <Timer className="w-5 h-5" />
                    <span className="tabular-nums text-xl">{formatTime(timeLeft)}</span>
                  </div>
                  <div className="h-10 w-px bg-slate-100 hidden sm:block" />
                  <div className="hidden sm:block">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Current Track</p>
                    <p className="font-bold text-brand-green">{activeSection?.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="heading-serif text-2xl font-black text-brand-green leading-none">
                    {progress.currentQuestionIndex + 1} 
                    <span className="text-slate-200 text-sm mx-2">OF</span> 
                    <span className="text-brand-gold">{questions.length}</span>
                  </p>
                </div>
              </div>

              <div className="h-3 bg-white rounded-full overflow-hidden border-2 border-slate-50 shadow-inner">
                <motion.div className="h-full bg-brand-green" initial={{ width: 0 }} animate={{ width: `${((progress.currentQuestionIndex + 1) / questions.length) * 100}%` }} />
              </div>

              <div className="space-y-8">
                <div className="relative p-10 bg-white border-2 border-slate-100 rounded-[32px] shadow-lg">
                  <h2 className="heading-serif text-2xl md:text-3xl font-black leading-tight text-slate-900">
                    {questions[progress.currentQuestionIndex].text}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {questions[progress.currentQuestionIndex].options.map((option, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ x: 8, borderColor: '#1d442e', backgroundColor: 'rgba(29, 68, 46, 0.02)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className="p-6 bg-white border-2 border-slate-100 rounded-2xl text-left transition-all flex items-center justify-between group shadow-sm"
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-brand-green group-hover:text-white flex items-center justify-center font-black text-slate-400 transition-colors">
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="font-bold text-lg text-slate-800">{option}</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-slate-100 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {state === 'results' && (
            <motion.div key="results" className="max-w-4xl mx-auto space-y-16">
              <div className="bg-brand-green p-12 rounded-[50px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                  <Trophy className="w-64 h-64 text-brand-gold" />
                </div>
                <div className="text-center space-y-8 relative z-10">
                  <div className="inline-flex p-6 bg-brand-gold text-brand-green rounded-full shadow-2xl animate-bounce">
                    <Trophy className="w-16 h-16" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="heading-serif text-5xl font-black tracking-tight">Report Logged</h2>
                    <p className="text-brand-gold text-xl font-bold uppercase tracking-[6px]">{studentInfo?.name}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-12 py-8 border-y border-white/10">
                    <div className="text-center">
                      <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-3">Module Score</p>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-7xl font-black tabular-nums">{progress.score}</span>
                        <span className="text-white/30 text-xl font-black">/ {questions.length}</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-3">Efficiency</p>
                      <p className="text-7xl font-black tabular-nums">
                        {Math.round((progress.score / questions.length) * 100)}%
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <button onClick={() => activeSection && startQuiz(activeSection)} className="flex-1 py-4 bg-brand-gold text-brand-green rounded-2xl font-black text-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
                      <RotateCcw className="w-6 h-6" /> Retake Track
                    </button>
                    <button onClick={() => setState('welcome')} className="flex-1 py-4 bg-white/10 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all border-2 border-white/20">
                      Academy Portal
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4 px-2">
                  <div className="h-10 w-2 bg-brand-gold rounded-full" />
                  <h3 className="heading-serif text-3xl font-black text-brand-green">Academic Rationale</h3>
                </div>
                <div className="space-y-6">
                  {questions.map((q, idx) => {
                    const userAnswer = progress.answers[q.id];
                    const isCorrect = userAnswer === q.correctAnswer;
                    return (
                      <div key={q.id} className="p-8 bg-white border-2 border-slate-100 shadow-lg rounded-[32px] space-y-4 relative overflow-hidden group">
                        <div className={`absolute top-0 right-0 w-3 h-full ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        <h4 className="heading-serif font-black text-xl text-slate-800">
                          <span className="text-brand-gold mr-3 opacity-40">#{idx + 1}</span> {q.text}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className={`p-4 rounded-2xl border-2 ${isCorrect ? 'bg-emerald-50/30 border-emerald-100 text-emerald-900' : 'bg-red-50/30 border-red-100 text-red-900'}`}>
                            <span className="text-[10px] font-black uppercase text-slate-400 block mb-2">My Answer</span>
                            <span className="font-bold">{userAnswer || 'Timed Out'}</span>
                          </div>
                          {!isCorrect && (
                            <div className="p-4 rounded-2xl bg-brand-green/5 border-2 border-brand-green/10 text-brand-green">
                              <span className="text-[10px] font-black uppercase text-brand-green/40 block mb-2">Verified Key</span>
                              <span className="font-bold">{q.correctAnswer}</span>
                            </div>
                          )}
                        </div>
                        {q.explanation && (
                          <p className="p-4 bg-brand-gold/5 rounded-xl text-slate-500 font-bold text-sm border-l-4 border-brand-gold">
                            {q.explanation}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {state === 'admin' && (
            <motion.div key="admin" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="heading-serif text-4xl font-black text-brand-green">Submissions Ledger</h2>
                  <p className="text-slate-500 font-bold mt-1">Founders' Archive: Tracking Excellence across SFK Modules</p>
                </div>
                <button onClick={() => setState('welcome')} className="flex items-center gap-2 text-brand-green font-bold hover:scale-105 transition-transform">
                  <ArrowLeft className="w-5 h-5" /> Portal Home
                </button>
              </div>

              <div className="flex gap-8 border-b border-slate-200">
                <button 
                  onClick={() => setAdminTab('submissions')}
                  className={`pb-4 px-2 font-black text-xs tracking-widest uppercase transition-all relative ${adminTab === 'submissions' ? 'text-brand-green' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  Recent Submissions
                  {adminTab === 'submissions' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green rounded-full" />}
                </button>
                <button 
                  onClick={() => setAdminTab('live')}
                  className={`pb-4 px-2 font-black text-xs tracking-widest uppercase transition-all relative ${adminTab === 'live' ? 'text-brand-green' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <Activity className={`w-4 h-4 ${liveMonitor.length > 0 ? 'text-red-500 animate-pulse' : ''}`} />
                    Live Monitor
                    {liveMonitor.filter(m => !m.isFinished).length > 0 && (
                      <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-[10px]">
                        {liveMonitor.filter(m => !m.isFinished).length}
                      </span>
                    )}
                  </div>
                  {adminTab === 'live' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-brand-green rounded-full" />}
                </button>
              </div>

              <div className="bg-white rounded-[32px] shadow-2xl border-2 border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                  {adminTab === 'submissions' ? (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-brand-green text-brand-gold border-b border-brand-green-hover">
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Student Details</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Module Path</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-center">Score Ratio</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-center">Efficiency %</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-right">Timestamp</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {submissions.length > 0 ? submissions.map((sub) => (
                          <tr key={sub.id} className="hover:bg-slate-50/80 transition-colors group">
                            <td className="px-8 py-6">
                              <div className="flex flex-col">
                                <span className="font-black text-slate-800 text-lg group-hover:text-brand-green transition-colors">{sub.studentName}</span>
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-500">{sub.studentEmail}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-green/5 flex items-center justify-center text-brand-green">
                                  <History className="w-4 h-4" />
                                </div>
                                <span className="font-bold text-slate-600">{sub.sectionName}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-center tabular-nums font-black text-slate-800">
                              {sub.score} <span className="text-slate-300">/</span> {sub.total}
                            </td>
                            <td className="px-8 py-6 text-center">
                              <span className={`inline-block px-3 py-1 rounded-full font-black text-xs ${
                                (sub.score/sub.total) >= 0.8 ? 'bg-emerald-50 text-emerald-600' : 
                                (sub.score/sub.total) >= 0.5 ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                              }`}>
                                {Math.round((sub.score / sub.total) * 100)}%
                              </span>
                            </td>
                            <td className="px-8 py-6 text-right text-xs font-bold text-slate-400 tabular-nums">
                              {new Date(sub.submittedAt).toLocaleString()}
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="p-20 text-center">
                              <div className="flex flex-col items-center gap-4 text-slate-300">
                                <History className="w-16 h-16 opacity-30" />
                                <p className="font-black text-xl uppercase tracking-widest">No Submissions Recorded Yet</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-brand-green text-brand-gold border-b border-brand-green-hover">
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Active Student</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Testing Track</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap">Progress Status</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-center">Current Score</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {liveMonitor.length > 0 ? liveMonitor.map((monitor) => (
                          <tr key={monitor.studentEmail} className={`hover:bg-slate-50/80 transition-colors group ${monitor.isFinished ? 'opacity-60 bg-slate-50/30' : ''}`}>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${monitor.isFinished ? 'bg-slate-300' : 'bg-emerald-500 animate-pulse'}`} />
                                <div className="flex flex-col">
                                  <span className="font-black text-slate-800 text-lg">{monitor.studentName}</span>
                                  <span className="text-xs font-bold text-slate-400">{monitor.studentEmail}</span>
                                </div>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                  <Zap className="w-4 h-4" />
                                </div>
                                <span className="font-bold text-slate-600">{monitor.sectionName}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6">
                              <div className="space-y-2 max-w-[200px]">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                                  <span>Question {monitor.currentQuestionIndex + 1}/{monitor.totalQuestions}</span>
                                  <span>{Math.round(((monitor.currentQuestionIndex + 1) / monitor.totalQuestions) * 100)}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full transition-all duration-500 ${monitor.isFinished ? 'bg-slate-400' : 'bg-brand-green'}`} 
                                    style={{ width: `${((monitor.currentQuestionIndex + 1) / monitor.totalQuestions) * 100}%` }} 
                                  />
                                </div>
                                {monitor.isFinished && (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    <UserCheck className="w-3 h-3" /> Completed
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="px-8 py-6 text-center tabular-nums font-black text-slate-800">
                              {monitor.score}
                            </td>
                            <td className="px-8 py-6 text-right">
                              {monitor.isFinished ? (
                                <button 
                                  onClick={() => clearFinishedProgress(monitor.studentEmail)}
                                  className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-all"
                                  title="Clear Record"
                                >
                                  <RotateCcw className="w-5 h-5" />
                                </button>
                              ) : (
                                <div className="flex items-center justify-end gap-2 text-slate-300 font-bold text-[10px] uppercase">
                                  <Clock className="w-3 h-3" />
                                  Active
                                </div>
                              )}
                            </td>
                          </tr>
                        )) : (
                          <tr>
                            <td colSpan={5} className="p-20 text-center">
                              <div className="flex flex-col items-center gap-4 text-slate-200">
                                <Activity className="w-16 h-16 opacity-30" />
                                <p className="font-black text-xl uppercase tracking-widest">No Active Students Detected</p>
                                <p className="text-slate-400 text-sm max-w-xs">Students will appear here as soon as they start a module.</p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="pt-24 pb-12 text-center space-y-4">
        <p className="text-slate-400 font-bold tracking-widest uppercase text-sm">
          &copy; {new Date().getFullYear()} Shah Fahad Khan Academy. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
