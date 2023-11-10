import './style/container.css'

const Container: React.FC<any> = ({ children }) => (
  <div className='container'>
    {children}
  </div>
);

export default Container;
