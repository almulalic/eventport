import Link from "antd/es/typography/Link";
import { login } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FacebookFilled, GoogleSquareFilled, InstagramOutlined, MailOutlined } from "@ant-design/icons";

import "./Login.scss";

export type LoginFormData = {
	email: string;
	password: string;
	rememberMe: boolean;
};

export default function Login() {
	const { loading } = useSelector((state: RootState) => state.auth);

	const dispatch = useDispatch<AppDispatch>();

	const onFinish = (values: any) => {
		console.log("Form values:", values);
		dispatch(login());
	};

	return (
		<div id="login">
			<div id="login-left">
				<div className="overlay"></div>
				<div className="img-container"></div>
			</div>
			<div id="login-right">
				<div className="login-card">
					<div className="login-card-header">
						<h1>Log in</h1>
						<p>Sign in to your account</p>
					</div>
					<Form
						name="login-form"
						initialValues={{ remember: true }}
						layout="vertical"
						onFinish={onFinish}
						autoComplete="off"
						requiredMark={false}
					>
						<Form.Item
							label="Enter your email address"
							name="email"
							rules={[
								{ required: true, message: "Please enter your email!" },
								{ type: "email", message: "Please enter a valid email address!" },
							]}
						>
							<Input suffix={<MailOutlined />} placeholder="your-email@example.com" disabled={loading} />
						</Form.Item>
						<Form.Item
							label="Enter your password"
							name="password"
							rules={[
								{ required: true, message: "Please enter your password!" },
								{ min: 6, message: "Password must be at least 6 characters!" },
							]}
						>
							<Input.Password placeholder="•••••••••••••••••••••••" disabled={loading} />
						</Form.Item>
						<Form.Item>
							<div className="login-form-additional-options">
								<Checkbox disabled={loading}>Remember me</Checkbox>
								<Link disabled={loading}>Forgot your password?</Link>
							</div>
						</Form.Item>
						<Form.Item>
							<Button block size="large" disabled={loading} htmlType="submit">
								Log in
							</Button>
						</Form.Item>
					</Form>
					<div className="login-form-or-design">
						<div className="line"></div>
						<div className="or-text">or</div>
						<div className="line"></div>
					</div>
					<div className="login-form-oauth-buttons">
						<Button className="login-form-oauth-button" size="large" disabled={loading}>
							<GoogleSquareFilled />
						</Button>
						<Button className="login-form-oauth-button" size="large" disabled={loading}>
							<FacebookFilled />
						</Button>
						<Button className="login-form-oauth-button" size="large" disabled={loading}>
							<InstagramOutlined />
						</Button>
					</div>
					<div className="login-form-sign-up-message">
						Don't have an account yet? <Link disabled={loading}>Sign up!</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
