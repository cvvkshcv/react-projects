import './App.css';
import TextInput from './memo/hoc/TextInput';
import Select from './memo/hoc/Select';
import TextArea from './memo/hoc/TextArea';
import Visibility from './memo/hoc/Visibility';

function App() {
  
  return (
    <div className="App">
      <Visibility
        show={true}
        component={<TextInput value={'Vikash'} />}
      />
      <Visibility
        show={false}
        component={<Select options={['India', 'USA']} />}
      />
      <Visibility
        show={false}
        component={<TextArea value={'About me...'} />}
      />
    </div>
  );
}

export default App;
