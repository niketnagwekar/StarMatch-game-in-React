

const PlayNumber = (props) => {
    return (
    <button className="number" 
    style = {{ backgroundColor : props.colors[props.status]}}
    onClick={() => props.onClick(props.number , props.status)}>
      {props.number}
    </button>)
  };

  
  export default PlayNumber;