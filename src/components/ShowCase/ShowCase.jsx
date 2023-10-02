import styles from './ShowCase.module.css'


import { useEffect, useState,useRef } from 'react'

//JSON INFO
import data from '../../../public/api/cars.json'

//Components
import VehicleCard from '../VeichleCard/VeichleCaRD'


import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'

const ShowCase = () => {

    const carousel = useRef(null);

    const[cars,setCars] = useState([]);

    const[sedanCars,setSedanCars] = useState([]);
    const[estateCars,setEstateCars] = useState([]);
    const[suvCars,setSuvCars] = useState([]);

    useEffect(() => {
        setCars(data);
        console.log(cars);     
    },[]);

    useEffect(() => {
        setSedanCars(cars.filter(car => car.bodyType === 'sedan'));
        setEstateCars(cars.filter(car => car.bodyType === 'estate'));
        setSuvCars(cars.filter(car => car.bodyType === 'suv')); 

        console.log(sedanCars);
        console.log(estateCars);
        console.log(suvCars); 
        
    },[cars]);        

   const[currentCar,setCurrentCar] = useState('all');



    function handleLeftClick(){
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    function handleRightClick(){
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }




    return(
        <div className={styles.showcase_container}>  
            <h2>Todos os modelos Recharge</h2>

            <div className={styles.car_filter}>
                <p onClick={() => {setCurrentCar('all')}}>Todos({cars.length})</p>

                <p onClick={() => {setCurrentCar('suv')}}>SUV({suvCars.length})</p>

                <p onClick={() => {setCurrentCar('estate')}}>Estate({estateCars.length})</p>

                <p onClick={() => {setCurrentCar('sedan')}}>Sedan({sedanCars.length})</p>
            </div>
            <div className={styles.slider} ref={carousel}>
                {currentCar === 'all' ? (cars.map((item,index) => (
                    <VehicleCard data={item} key={index}/> 
                ))) : ('')}
                {currentCar === 'suv' ? (suvCars.map((item,index) => (
                    <VehicleCard data={item} key={index}/> 
                ))) : ('')}
                {currentCar === 'estate' ? (estateCars.map((item,index) => (
                    <VehicleCard data={item} key={index}/> 
                ))) : ('')}
                {currentCar === 'sedan' ? (sedanCars.map((item,index) => (
                    <VehicleCard data={item} key={index}/> 
                ))) : ('')}
            </div> 
            <div className={styles.slider_btn_container}>
                <button onClick={handleLeftClick}>
                    <BsChevronLeft/>
                </button>
                <button onClick={handleRightClick}>
                    <BsChevronRight/>
                </button>
            </div>


        </div>
    )
}

export default ShowCase 