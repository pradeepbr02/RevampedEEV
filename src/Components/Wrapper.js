import "./Wrapper.css";
const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="app">{children}</div>
    </div>
  );
};
export default Wrapper;
