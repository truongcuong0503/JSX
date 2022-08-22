import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);

//[Bài tập] Tạo Element thể hiện thông tin của Trình duyệt bạn đang sử dụng
// const browser = <h4>Browser's details: {navigator.userAgent}</h4>;

//[Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học
// const students = [
//   {
//     company: "Alfreds Futterkiste",
//     contact: "Maria Anders",
//     country: "Germany",
//   },
//   {
//     company: "Centro comercial Moctezuma",
//     contact: "Francisco Chang",
//     country: "Mexico",
//   },
//   {
//     company: "Ernst Handel",
//     contact: "Roland Mendel",
//     country: "Austria",
//   },
//   {
//     company: "Island Trading",
//     contact: "Helen Bennett",
//     country: "UK",
//   },
//   {
//     company: "Laughing Bacchus Winecellars",
//     contact: "Yoshi Tannamuri",
//     country: "Canada",
//   },
//   {
//     company: "Magazzini Alimentari Riuniti",
//     contact: "Giovanni Rovelli",
//     country: "Italy",
//   },
// ];

// const table = (
//   <div className="table-container">
//     <hr />
//     <h1>Studednts</h1>
//     <table>
//       <th>Company</th>
//       <th>Contact</th>
//       <th>Country</th>
//       {students.map((student) => (
//         <tr>
//           <td>{student.company}</td>
//           <td>{student.contact}</td>
//           <td>{student.country}</td>
//         </tr>
//       ))}
//     </table>
//   </div>
// );

//[Bài tập] Tạo Element thể hiện Profile Card (như hình minh hoạ)
// const profile = (
//   <div className="container my-5 ">
//     <div className="card ">
//       <div className="card--header shadow-lg p-3 mb-5 bg-body rounded" />
//       <img
//         className="avatar"
//         src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//         alt="avatar"
//       />
//       <div className="card--body">
//         <div>
//           <p className="text-header">Ruma Khan</p>
//           <p className="text-sub">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry
//           </p>
//           <button className="btn btn-success rounded-pill">FOLLOW</button>
//         </div>
//       </div>
//     </div>
//   </div>
// );

//[Bài tập] Tạo Element thể hiện Sign in Form sử dụng Bootstrap
// const signIn = (
//     <div className="container d-flex align-items-center text-center">
//     <div className="form-signin">
//       <form>
//         <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
//         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//         <div className="form-floating">
//           <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com" />
//           <label>Email address</label>
//         </div>
//         <div className="form-floating">
//           <input type="password" className="form-control password" id="floatingPassword" placeholder="Password" />
//           <label>Password</label>
//         </div>
//         <div className="checkbox mb-3">
//           <label>
//             <input type="checkbox" /> Remember me
//           </label>
//         </div>
//         <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//         <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//       </form>
//     </div>
//   </div>
// );

//[Bài tập] Tạo Element thể hiện Sign in Form sử dụng Bootstrap
const signInForm = (
  <section className="h-100">
		<div className="container h-100">
			<div className="row justify-content-sm-center h-100">
				<div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
					<div className="text-center my-5">
						<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100"></img>
					</div>
					<div className="card shadow-lg">
						<div className="card-body p-5">
							<h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
							<form method="POST" className="needs-validation" novalidate="" autocomplete="off">
								<div className="mb-3">
									<label className="mb-2 text-muted" forHtml="email">E-Mail Address</label>
									<input id="email" type="email" className="form-control" name="email" value="" required autofocus></input>
									<div className="invalid-feedback">
										Email is invalid
									</div>
								</div>

								<div className="mb-3">
									<div className="mb-2 w-100">
										<label className="text-muted" forHtml="password">Password</label>
										<a href="forgot.html" className="float-end">
											Forgot Password?
										</a>
									</div>
									<input id="password" type="password" className="form-control" name="password" required></input>
								    <div className="invalid-feedback">
								    	Password is required
							    	</div>
								</div>

								<div className="d-flex align-items-center">
									<div className="form-check">
										<input type="checkbox" name="remember" id="remember" className="form-check-input"></input>
										<label forHtml="remember" className="form-check-label">Remember Me</label>
									</div>
									<button type="submit" className="btn btn-primary ms-auto">
										Login
									</button>
								</div>
							</form>
						</div>
						<div className="card-footer py-3 border-0">
							<div className="text-center">
								Don't have an account? <a href="register.html" className="text-dark">Create One</a>
							</div>
						</div>
					</div>
					<div className="text-center mt-5 text-muted">
						Copyright &copy; 2017-2021 &mdash; Your Company 
					</div>
				</div>
			</div>
		</div>
	</section>
);

root.render(signInForm);
