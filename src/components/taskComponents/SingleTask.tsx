import { useState } from "react";
import { Task, TaskStatus } from "../../interfaces";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import { Modal } from '../modal/Modal';
import { useModal } from '../../hooks/useModal';

interface Props {
  task: Task;
  status: TaskStatus;
}

export const SingleTask = ( { task }: Props  ) => {

  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  const [isOpenModal7, openModal7, closeModal7] = useModal(false);

  const [hour, setHour] = useState('00');
  const [hour2, setHour2] = useState('00');
  const [hour3, setHour3] = useState('00');
  const [hour4, setHour4] = useState('00');
  const [hour5, setHour5] = useState('00');
  const [hour6, setHour6] = useState('00');
  const [hour7, setHour7] = useState('00');

  const [mins, setMins] = useState('00');
  const [mins2, setMins2] = useState('00');
  const [mins3, setMins3] = useState('00');
  const [mins4, setMins4] = useState('00');
  const [mins5, setMins5] = useState('00');
  const [mins6, setMins6] = useState('00');
  const [mins7, setMins7] = useState('00');

  const [contador, setContador] = useState('undone');
  const [contador2, setContador2] = useState('undone');
  const [contador3, setContador3] = useState('undone');
  const [contador4, setContador4] = useState('undone');
  const [contador5, setContador5] = useState('undone');
  const [contador6, setContador6] = useState('undone');
  const [contador7, setContador7] = useState('undone');

  const [frecuency, setFrecuency] = useState(0);
  const [frecuency2, setFrecuency2] = useState(0);
  const [frecuency3, setFrecuency3] = useState(0);
  const [frecuency4, setFrecuency4] = useState(0);
  const [frecuency5, setFrecuency5] = useState(0);
  const [frecuency6, setFrecuency6] = useState(0);
  const [frecuency7, setFrecuency7] = useState(0);

  const counter1 = () => {

    if(contador == 'undone'){
      setContador('done');
      setFrecuency(frecuency + 1);
    }
    else{
      setContador('undone');
      setFrecuency(frecuency - 1);
    }

  };

  const counter2 = () => {

    if(contador2 == 'undone'){
      setContador2('done');
      setFrecuency2(frecuency2 + 1);
    }
    else{
      setContador2('undone');
      setFrecuency2(frecuency2 - 1);
    }

  };

  const counter3 = () => {

    if(contador3 == 'undone'){
      setContador3('done');
      setFrecuency3(frecuency3 + 1);
    }
    else{
      setContador3('undone');
      setFrecuency3(frecuency3 - 1);
    }

  };

  const counter4 = () => {

    if(contador4 == 'undone'){
      setContador4('done');
      setFrecuency4(frecuency4 + 1);
    }
    else{
      setContador4('undone');
      setFrecuency4(frecuency4 - 1);
    }

  };

  const counter5 = () => {

    if(contador5 == 'undone'){
      setContador5('done');
      setFrecuency5(frecuency5 + 1);
    }
    else{
      setContador5('undone');
      setFrecuency5(frecuency5 - 1);
    }

  };

  const counter6 = () => {

    if(contador6 == 'undone'){
      setContador6('done');
      setFrecuency6(frecuency6 + 1);
    }
    else{
      setContador6('undone');
      setFrecuency6(frecuency6 - 1);
    }

  };

  const counter7 = () => {

    if(contador7 == 'undone'){
      setContador7('done');
      setFrecuency7(frecuency7 + 1);
    }
    else{
      setContador7('undone');
      setFrecuency7(frecuency7 - 1);
    }

  };

  const frecuencyTotalCheckeable:any = frecuency + frecuency2 + frecuency3 + frecuency4 + frecuency5 + frecuency6 + frecuency7;
  const frecuencyTotalMeansurableHour:any = parseInt(hour, 10) + parseInt(hour2, 10) + parseInt(hour3, 10) + parseInt(hour4, 10) + parseInt(hour5, 10) + parseInt(hour6, 10) + parseInt(hour7, 10);
  const frecuencyTotalMeansurableMins:any = parseInt(mins, 10) + parseInt(mins2, 10) + parseInt(mins3, 10) + parseInt(mins4, 10) + parseInt(mins5, 10) + parseInt(mins6, 10) + parseInt(mins7, 10);
  
  return (

    <div className="flex flex-col px-3">

      <div className="grid grid-cols-7 p-1 bg-white shadow-[0_2px_1px_2px_rgba(0,0,0,0.3)]">
            
        <div>

          <p className="text-xl max-[550px]:text-base max-[410px]:text-sm">
            { task.title }
          </p>

        </div>

        <div className="flex flex-col w-full col-span-6">{
          
          task.taskType == 'checkeable' ?

          <div className="flex justify-around">

            <button onClick={counter1}>{

                  contador == 'undone' ? 
                  <FaXmark
                  className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />

            }</button>
              
            <button onClick={counter2}>{

                  contador2 == 'undone' ? 
                  <FaXmark
                    className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                    
            }</button>

            <button onClick={counter3}>{

                  contador3 == 'undone' ? 
                  <FaXmark
                    className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  
            }</button>

            <button onClick={counter4}>{

                  contador4 == 'undone' ? 
                  <FaXmark
                    className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  
            }</button>

            <button onClick={counter5}>{

                  contador5 == 'undone' ? 
                  <FaXmark
                    className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  
            }</button>

            <button onClick={counter6}>{

                  contador6 == 'undone' ? 
                  <FaXmark
                    className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  
            }</button>

            <button onClick={counter7}>{

                  contador7 == 'undone' ? 
                  <FaXmark
                    className="text-2xl text-red-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  :
                  <IoMdCheckmark
                    className="text-2xl text-green-600 max-[550px]:text-xl max-[410px]:text-base"
                  />
                  
            }</button>

          </div>
          
          :

          <div className="flex justify-around">
            
            <button onClick={openModal1}>{hour}:{mins}</button>
            <button onClick={openModal2}>{hour2}:{mins2}</button>
            <button onClick={openModal3}>{hour3}:{mins3}</button>
            <button onClick={openModal4}>{hour4}:{mins4}</button>
            <button onClick={openModal5}>{hour5}:{mins5}</button>
            <button onClick={openModal6}>{hour6}:{mins6}</button>
            <button onClick={openModal7}>{hour7}:{mins7}</button>

          </div>

        }</div>

        <div>{
          
          task.taskType == 'checkeable' ?
          
          <div className="flex mb-2 bg-white p-1 max-[550px]:text-sm max-[410px]:text-xs">{
          
            frecuencyTotalCheckeable == task.frecuency ?
              
            <p className="text-green-600 ">Frec.: {frecuencyTotalCheckeable}/{task.frecuency}</p>
    
            : 
    
            frecuencyTotalCheckeable > task.frecuency ?
    
            <p className="text-yellow-600">Frec.: {frecuencyTotalCheckeable}/{task.frecuency}</p>
    
            :
    
            <p>Frec.: {frecuencyTotalCheckeable}/{task.frecuency}</p>
              
    
          }</div>

          :

          <div className="flex mb-2 bg-white p-1 max-[550px]:text-sm max-[410px]:text-xs">{
          
            frecuencyTotalMeansurableHour == task.frecuency ?
    
            <p className="text-green-600">Frec.: {parseInt(frecuencyTotalMeansurableHour)}/{task.frecuency}</p>
              
            : 
    
            frecuencyTotalMeansurableHour > task.frecuency ?
    
            <p className="text-yellow-600">Frec.: {frecuencyTotalMeansurableHour}/{task.frecuency}</p>
    
            :
    
            <p>Frec.: {frecuencyTotalMeansurableHour}:{frecuencyTotalMeansurableMins}/{task.frecuency}</p>
    
          }</div>
        
          
        }</div>
 
      </div>

      

      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal1}
            >
              Aceptar
            </button>

        </div>

      </Modal>

      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour2(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins2(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal2}
            >
              Aceptar
            </button>

        </div>

      </Modal>

      <Modal isOpen={isOpenModal3} closeModal={closeModal3}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour3(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins3(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal3}
            >
              Aceptar
            </button>

        </div>

      </Modal>

      <Modal isOpen={isOpenModal4} closeModal={closeModal4}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour4(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins4(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal4}
            >
              Aceptar
            </button>

        </div>

      </Modal>

      <Modal isOpen={isOpenModal5} closeModal={closeModal5}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour5(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins5(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal5}
            >
              Aceptar
            </button>

        </div>

      </Modal>

      <Modal isOpen={isOpenModal6} closeModal={closeModal6}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour6(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins6(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal6}
            >
              Aceptar
            </button>

        </div>

      </Modal>

      <Modal isOpen={isOpenModal7} closeModal={closeModal7}>

        <div className='flex flex-col justify-center items-center'>

          <div className='bg-white p-4 mb-7 w-full grid grid-cols-2 gap-4 shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[0.5rem] px-2 max-[590px]:ml-[0.7rem] max-[445px]:ml-[0.7rem]'>Horas</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={hour}
              onChange={(e) => setHour7(e.target.value)}
            >
              <option value={0}>0</option>
              <option value={1} >1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
              <option value={13}>13</option>
              <option value={14}>14</option>
              <option value={15}>15</option>
              <option value={16}>16</option>
              <option value={17}>17</option>
              <option value={18}>18</option>
              <option value={19}>19</option>
              <option value={20}>20</option>
              <option value={21}>21</option>         
              <option value={22}>22</option>         
              <option value={23}>23</option>         
              <option value={24}>24</option>         
            </select>

            <label className='bg-white absolute z-10 mt-[-0.8rem] ml-[15.7rem] px-2 max-[590px]:ml-[12.7rem] max-[445px]:ml-[10.4rem]'>Minutos</label>
            <select 
              className='bg-transparent rounded-sm border border-solid border-gray-600 p-3 cursor-pointer w-full '
              value={mins}
              onChange={(e) => setMins7(e.target.value)}
            >
              <option value={0} >0</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
              <option value={30}>30</option>
              <option value={35}>35</option>
              <option value={40}>40</option>
              <option value={45}>45</option>
              <option value={50}>50</option>
              <option value={55}>55</option>        
            </select>

          </div>

          <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[13rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModal7}
            >
              Aceptar
            </button>

        </div>

      </Modal>
          
    </div>

  )
}