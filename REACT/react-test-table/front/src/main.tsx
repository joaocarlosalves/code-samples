import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './shared/contexts/Auth/AuthProvider';
import { Auth } from './shared/contexts/Auth/Auth';
import { Loading } from './shared/components/Loading/Loading';
import { NotFound } from './pages/NotFound/NotFound';
import { Header } from './shared/layout/header/Header';
import './assets/styles/index.css';

const
    EditUser = lazy(() => import('./pages/User/EditUser')),
    Home = lazy(() => import('./pages/Home/Home')),
    Login = lazy(() => import('./pages/Auth/Login/Login')),
    Logout = lazy(() => import('./pages/Auth/Logout/Logout'));

export const App: React.FC = () => {
    return (
        <>
            <Router>
                <Header />
                <Suspense fallback={<Loading />}>
                    <AuthProvider>
                        <div className='container'>
                            <Routes>
                                <Route path='/' element={<Auth><Home /></Auth>} />
                                <Route path='/user/edit/:id' element={<Auth><EditUser /></Auth>} />
                                <Route path='/user/new' element={<EditUser />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/logout' element={<Logout />} />
                                <Route path='*' element={<NotFound />} />
                            </Routes>
                        </div>
                    </AuthProvider>
                </Suspense>
            </Router>
        </>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);