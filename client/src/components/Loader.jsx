import hummerLogo from '../assets/hummerLogo.svg'


function Loader() {
  return (
    <div className="loader-wrapper">
      <img src={hummerLogo} alt="Loading..." className="logo-spinner" 
      />
    </div>
  )
}

export default Loader