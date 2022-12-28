import * as React from "react";
import style from "./styles.module.css";
import logo from "../../assets/logo_color.png"
export interface IAppProps {}

export function Login(props: IAppProps) {
  return (
    <div>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.cabeçalho}>
            <img src={logo} className={style.logo}></img>
          </div>
          <div>
            <form>
              <div
                className={style.formcontent}
                data-validate="Username is required"
              >
                <label className={style.formlabel}>Login</label>
                <input type="text" name="username" placeholder="" />
                <span></span>
              </div>

              <div
                className={style.formcontent}
                data-validate="Password is required"
              >
                <label className={style.formlabel}>Senha</label>
                <input type="password" name="pass" placeholder="" />
                <span></span>
              </div>

              <div>
                <button className={style.button}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
