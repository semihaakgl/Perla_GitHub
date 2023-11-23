import snowdrop from "./img/snowdrop.jpg";
import "./Content.css"

const Content = () => {
  //? Local Style Object
  const pStyle = {
    fontFamily: "Tahoma",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  };

  const imgStyle ={
    display :"block",
    margin: "1rem auto",
    width :"400px"
  }



  return (
    <div>
      {/* JSX */}
      {/* Inline Styling */}
      <h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>
      <p style={pStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        excepturi!
      </p>
      <img
      style={imgStyle}
        src="https://cdn.pixabay.com/photo/2018/02/25/17/31/crocus-3181187_640.jpg"
        alt="spring-img1"
      />
      <img style={imgStyle} src={snowdrop} alt="snowdrop-img2" />

      <p className="par" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium a labore, quos molestiae sed ea voluptatem ducimus beatae similique hic officiis distinctio et facilis eos id commodi iure temporibus. Quisquam perferendis velit inventore voluptate fugit libero corrupti consequatur repellat id.</p>

      <p className="par">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, quia ea eos illum veritatis culpa reprehenderit quas neque ab illo.</p>
    </div>
  );
};

export default Content;
