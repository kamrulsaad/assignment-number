import * as React from 'react';
import './style.css';

export default function App() {
  const [problemNo, setProblemNo] = React.useState(0);
  const [error, setError] = React.useState('');

  const handleFormSubmit = (e: {
    preventDefault: () => void;
    target: { studentId: { value: string }; exercise: { value: any } };
  }) => {
    e.preventDefault();
    const id = parseInt(e.target.studentId.value);
    const exercise = e.target.exercise.value;
    const ch = parseInt(exercise.split('.')[0]);
    const section = parseInt(exercise.split('.')[1]);
    let totalMathNo: number;
    switch (exercise) {
      case '1.1':
        totalMathNo = 54;
        break;
      case '1.2':
        totalMathNo = 47;
        break;
      case '1.3':
        totalMathNo = 72;
        break;
      case '1.4':
        totalMathNo = 64;
        break;
      case '1.5':
        totalMathNo = 52;
        break;
      case '1.6':
        totalMathNo = 35;
        break;
      case '1.7':
        totalMathNo = 44;
        break;
      default:
        setError('Invalid Input');
    }
    const problem = (((ch * 5) + section + id) % totalMathNo) + 1;
    setProblemNo(problem);
  };

  return (
    <div className="header-text">
      <h1 style={{ color: 'white' }}>Find your exercise number</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="number"
          required
          placeholder="Last 3 digit of Your Id"
          className="input-field"
          name="studentId"
        />
        <input
          type="text"
          required
          placeholder="Exercise No. (e.g: 1.1 / 1.3)"
          className="input-field"
          name="exercise"
        />
        <input type="submit" className="submit-btn" />
      </form>
      {error ? (
        <p className='final-result' style={{color : 'red'}}>{error}</p>
      ) : (
        problemNo !== 0 && (
          <p className="final-result">You have to do problem No: {problemNo}</p>
        )
      )}
      <p style={{color: 'white', fontSize: '12px', position: 'absolute', bottom: 0, right:0, textAlign: 'end', padding: '2px'}}>According to the 8th edition of the book.
      All the best. <br/> All rights reserved by Mamun'30 & Saad'41 </p>
    </div>
  );
}
