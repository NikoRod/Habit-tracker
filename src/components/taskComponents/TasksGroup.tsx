import { IoAddOutline } from 'react-icons/io5';
import { Task, TaskStatus } from '../../interfaces';
import { SingleTask } from './SingleTask';
import { useTaskStore } from '../../stores/index.store';
import { Modal } from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';
import Weekview from '../calendar/Weekview';

interface Props {
  title: string,
  frecuency: number,
  task: Task[];
  status: TaskStatus;
  taskType: string;
}

export const TasksGroup = ( { status, task }: Props) => {

  // MODALS FUNCTIONALITIES
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModalCheck, openModalCheck, closeModalCheck] = useModal(false);
  const [isOpenModalMeasurable, openModalMeasurable, closeModalMeasurable] = useModal(false);

  const [inputHabitCheckeable, setInputHabitCheckeable] = useState('');
  const [inputHabitMeansurable, setInputHabitMeansurable] = useState('');
  const [inputFrecuencia, setInputFrecuencia] = useState('');
  const [taskTypeCheckeable, setTaskTypeCheckeable] = useState('');
  const [taskTypeMeansurable, setTaskTypeMeansurable] = useState('');

  const modalCheck = () => {
    openModalCheck();
    closeModal1();
    setTaskTypeCheckeable('checkeable');
  }

  const modalMeasurable = () => {
    openModalMeasurable();
    closeModal1();
    setTaskTypeMeansurable('meansurable');
  }

  const addTask = useTaskStore( state => state.addTask );

  const handleSubmit = (e: React.SyntheticEvent) => {

    e.preventDefault();
    setInputHabitCheckeable('');
    setInputHabitMeansurable('');
    setInputFrecuencia('');
    setTaskTypeCheckeable('');
    setTaskTypeMeansurable('');

    if(!inputHabitCheckeable && !inputHabitMeansurable){
      alert("Debes colocar un hábito.");
    }
    else if(inputHabitCheckeable && isOpenModalCheck == false) {
      addTask(inputHabitCheckeable, inputFrecuencia, status, taskTypeCheckeable);
    }
    else if(inputHabitMeansurable && isOpenModalMeasurable == false){
      addTask(inputHabitMeansurable, inputFrecuencia, status, taskTypeMeansurable);
      console.log("habito mensurable");
    }

  }

  return (

    <div className="flex flex-col w-full bg-neutral-200 h-screen">

      {/* Task Header */ }
      <div className="mb-7 mt-2 pr-3 w-full flex justify-end">

        <button
          className='text-3xl max-[550px]:text-2xl'
          onClick={openModal1} 
        >
          <IoAddOutline />
        </button>

      </div>

      <div className='mb-7'>

        <Weekview />

      </div>

      {/* Task Items */ }
      <div className="h-full w-full">

        {
          task.map( task => (
            <SingleTask key={task.id} task={task} status={status} />
          ))
        }

      </div>

      {/* ADD HABIT MODAL */}

      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>

        <div className='flex flex-col justify-center items-center'>

          <div 
            className='bg-white p-4 mb-7 w-full shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] rounded hover:bg-gray-100 transition-colors cursor-pointer max-[590px]:w-[80%] max-[445px]:w-[65%]'
            onClick={modalCheck}
          >

            <h1 className='text-3xl mb-2 text-black max-[445px]:text-2xl'>Sí o no</h1>
            <p className='text-xl text-gray-700 max-[445px]:text-base'>Ej.: ¿Estudiaste hoy? ¿Entrenaste hoy?</p>

          </div>

          <div 
            className='bg-white p-4 w-full shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] rounded hover:bg-gray-100 transition-colors cursor-pointer max-[590px]:w-[80%] max-[445px]:w-[65%]'
            onClick={modalMeasurable}
          >

            <h1 className='text-3xl text-black mb-2 max-[445px]:text-2xl'>Mensurable</h1>
            <p className='text-xl text-gray-700 max-[445px]:text-base'>Ej.: ¿Cuántas horas estudiaste hoy? ¿Cuántas páginas leíste?</p>

          </div>

        </div>

      </Modal>

      {/* CHECKEABLE HABIT MODAL */}

      <Modal isOpen={isOpenModalCheck} closeModal={closeModalCheck}>

        <div className='flex justify-center'>

          <form 
            className='bg-white p-2 mb-5 flex flex-col text-black w-full items-center rounded shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'
            onSubmit={handleSubmit}
          >

            <h1 className='text-3xl mb-4 text-center'>Crear hábito</h1>

            <label className='bg-white absolute z-10 mt-[2.4rem] ml-[-20rem] px-2 max-[590px]:ml-[-17rem] max-[445px]:ml-[-12rem]'>Hábito</label>
            <input 
              type="text" 
              value={inputHabitCheckeable} 
              onChange={(e) => setInputHabitCheckeable(e.target.value)} 
              className='bg-transparent border border-solid border-gray-600 p-3 mb-[2rem] w-full' 
              placeholder='Ej.: entrenar, meditar'
            />

            <label className='bg-white absolute z-10 mt-[7.5rem] ml-[-13rem] px-2 max-[590px]:ml-[-10rem] max-[445px]:ml-[-5rem]'>Frecuencia por semana</label>
            <select 
              name="frecuencia" 
              id="frecuencia" 
              className='bg-transparent border border-solid border-gray-600 p-3 cursor-pointer w-full'
              value={inputFrecuencia}
              onChange={(e) => setInputFrecuencia(e.target.value)}
            >
              <option value={7} >Todos los días</option>
              <option value={6}>6 días</option>
              <option value={5}>5 días</option>
              <option value={4}>4 días</option>
              <option value={3}>3 días</option>
              <option value={2}>2 días</option>
              <option value={1}>1 día</option>
            </select>

            <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[5.5rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModalCheck}
            >
              Aceptar
            </button>
            
          </form>

        </div>

      </Modal>

      {/* MEANSURABLE HABIT MODAL */}

      <Modal isOpen={isOpenModalMeasurable} closeModal={closeModalMeasurable}>

        <div className='flex justify-center'>

          <form 
            className='bg-white p-2 mb-5 flex flex-col text-black w-full items-center rounded shadow-[0_10px_10px_5px_rgba(0,0,0,0.3)] max-[590px]:w-[80%] max-[445px]:w-[65%]'
            onSubmit={handleSubmit}
          >

            <h1 className='text-3xl mb-4 text-center'>Crear hábito</h1>

            <label className='bg-white absolute z-10 mt-[2.4rem] ml-[-20rem] px-2 max-[590px]:ml-[-17rem] max-[445px]:ml-[-12rem]'>Hábito</label>
            <input 
              type="text" 
              value={inputHabitMeansurable} 
              onChange={(e) => setInputHabitMeansurable(e.target.value)} 
              className='bg-transparent border border-solid border-gray-600 p-3 mb-[2rem] w-full' 
              placeholder='Ej.: entrenar, meditar'
            />

            <label className='bg-white absolute z-10 mt-[7.5rem] ml-[-13rem] px-2 max-[590px]:ml-[-10rem] max-[445px]:ml-[-5rem]'>Frecuencia por semana</label>
            <select 
              name="frecuencia" 
              id="frecuencia" 
              className='bg-transparent border border-solid border-gray-600 p-3 cursor-pointer w-full'
              value={inputFrecuencia}
              onChange={(e) => setInputFrecuencia(e.target.value)}
            >
              <option value={1} >1hs</option>
              <option value={2}>2hs</option>
              <option value={3}>3hs</option>
              <option value={4}>4hs</option>
              <option value={5}>5hs</option>
              <option value={6}>6hs</option>
              <option value={7}>7hs</option>
              <option value={8}>8hs</option>
              <option value={9}>9hs</option>
              <option value={10}>10hs</option>
              <option value={11}>11hs</option>
              <option value={12}>12hs</option>
              <option value={13}>13hs</option>
              <option value={14}>14hs</option>
              <option value={15}>15hs</option>
              <option value={16}>16hs</option>
              <option value={17}>17hs</option>
              <option value={18}>18hs</option>
              <option value={19}>19hs</option>
              <option value={20}>20hs</option>
              <option value={21}>21hs</option>
              <option value={22}>22hs</option>
              <option value={23}>23hs</option>
              <option value={24}>24hs</option>
            </select>

            <button 
              className='w-[6rem] px-3 py-1 absolute bottom-[5.5rem] border-[2px] border-solid border-gray-600 bg-white rounded-md hover:bg-gray-200 transition-colors'
              type='submit'
              onClick={closeModalMeasurable}
            >
              Aceptar
            </button>
            
          </form>

        </div>

      </Modal>

    </div>

  );
};