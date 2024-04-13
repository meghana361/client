
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Landingpage from './pages/Landingpage';
import SecondCard from './pages/SecondCard';
import GoalList from './components/GoalList';
import WorkoutTracker from './components/WorkoutTracker';
import { Data } from './Utils/Data';
import Chart from "chart.js/auto";
import { useState } from "react";
import { CategoryScale } from "chart.js";
import { Navigate, Route, Routes } from "react-router-dom";
import Workoutschedule from './components/Workoutschedule';

Chart.register(CategoryScale);

function App() {
  const [authUser,setAuthUser]=useState(false);
  const [chartData, setChartData] = useState({
   
    datasets: [
      {
        label: "calories",
        data: Data.map((data) => data.cal),
        scaleType: 'band',
    

        categoryGapRatio: 0.3,
        barGapRatio: 0.1,

        borderColor: "black",
        borderWidth: 2,
        

      }
    ]
  });


  return (
  <div>
    {/* <Landingpage/> */}
    {/* <Signup/>  */}
    {/* <WorkoutTracker chartData={chartData}/> */}
    {/* <Workoutschedule/> */}
    {/* <Login/> */}
    {/* <Landingpage/> */}
    {/* <SecondCard/> */}
    {/* <GoalList/> */}
    <Routes>
      <Route path='/'element={<Landingpage/>}/>
      <Route path='/tracker'element={<WorkoutTracker/>}/>
      <Route path='/schedule'element={<Workoutschedule/>}/>
      
      <Route path='/secondcard'element={<SecondCard/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/goal'element={<GoalList/>}/>
      <Route path='/signup'element={<Signup/>}/>
    </Routes>

  </div>
  );
}

export default App;
