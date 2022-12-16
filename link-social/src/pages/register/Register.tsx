import { Link } from "react-router-dom";
import "./register.scss";
export const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Link Social</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, excepturi! Quae beatae est error expedita sapiente
            praesentium distinctio reprehenderit at, deserunt quaerat ipsum
            facilis alias animi enim a ut officia.
          </p>
          <span>Do have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={() => {}}>
            <input type="text" placeholder="Username" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" name="" id="" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
