const Bag= () => {
 
    return (
        <div className="me-2 ">
        <button type="button" className="position-relative btn btn-primary bag">
           <i className="fa-solid fa-bag-shopping position-abdolute"></i>
           <span className="position-absolute translate-middle badge rounded-pill bg-secondary">
           5
           </span>
        </button>
        </div> 
    );
  };
  
  export default Bag;