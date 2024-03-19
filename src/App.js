
import './App.scss';
import Header from './component/Header';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { UserContext } from './context/usercontext';
import { useContext, useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { useParams } from 'react-router-dom';

function App() {
  const {id} = useParams()
  const { user,loginContext } = useContext(UserContext);

  useEffect(()=>{
    const emailLocalStorage = localStorage.getItem('email');
    if(emailLocalStorage){
      loginContext(emailLocalStorage)
    }
  },[])

  return (
    <>
    <div className="App-container">
          {user && user.auth ? <Header/> : ''}
         
        
              <AppRoutes/>
          
    </div>
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
    />

    </>
  );
}

export default App;
