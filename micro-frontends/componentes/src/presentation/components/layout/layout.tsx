import MenuIcon from "@rsuite/icons/Menu";
import { useState } from "react";
import {
	Avatar,
	Container,
	Content,
	Dropdown,
	FlexboxGrid,
	Footer,
	IconButton,
} from "rsuite";
import brasaoPcdf from "../../assets/logo.png";
import style from "./style.module.css";

const Layout = ({ children }: { children: any }) => {
	const [isUserDropdownOpened, setIsUserDropdownOpened] = useState(false);
	return (
		<>
			<div
				className='black-bg'
				style={{ position: "fixed", width: "100%", zIndex: "1000" }}
			>
				<FlexboxGrid
					justify='space-between'
					align='middle'
					style={{
						gap: "20px",
					}}
				>
					<FlexboxGrid.Item>
						<div
							style={{
								lineHeight: "15px",
								color: "white",
								fontSize: "1rem",
								display: "flex",
								alignItems: "center",
								flexDirection: "row",
								gap: "5px",
							}}
						>
							<IconButton
								onClick={() => {
									dispatchEvent(
										new CustomEvent("@pcdf/componentes/abrir-fechar-sidenav")
									);
								}}
								icon={<MenuIcon />}
								appearance='link'
								circle
								size='lg'
							/>
							<img
								src={brasaoPcdf}
								style={{ cursor: "pointer" }}
								alt='Brasão da Polícia Civil do Distrito Federal'
								// onClick={() => history.push("/")}
							/>
							<p
								style={{
									cursor: "pointer",
									fontFamily: '"Franklin Gothic", sans-serif',
								}}
								id='nome-do-sistema'
								// onClick={() => history.push("/")}
							></p>
						</div>
					</FlexboxGrid.Item>

					<FlexboxGrid.Item style={{display: "flex", gap: "15px", paddingRight: "15px"}}>
						<Dropdown
							trigger={"click"}
							open={isUserDropdownOpened}
							renderToggle={() => (
								<Avatar
									className={style.avatar}
									circle
									style={{ background: "#bea55a" }}
									onClick={() => {setIsUserDropdownOpened(!isUserDropdownOpened)}}
								>
									F
								</Avatar>
							)}
							placement="bottomEnd"
						>
								<Dropdown.Item><a href="/ditec-ajuda">DITEC Ajuda</a></Dropdown.Item>
								<Dropdown.Item><a href="/ocorrencia">Ocorrencia</a></Dropdown.Item>
								<Dropdown.Item>Alterar senha</Dropdown.Item>
								<Dropdown.Item
								// onClick={() => {
								// 	auth.signoutRedirect();
								// }}
								>
									Sair
								</Dropdown.Item>
						</Dropdown>
					</FlexboxGrid.Item>
				</FlexboxGrid>
			</div>

			<Container>
				<Content>
					<Container>
						<Content style={{ minHeight: "100vh", marginTop: "55px" }}>{children || ""}</Content>
					</Container>
				</Content>
			</Container>
			<Footer
				className='ice-bg ice-color'
				style={{
					height: "50px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<span>
					Polícia Civil do Distrito Federal - Divisão de Tecnologia - DITEC |
					3207-4661
				</span>
			</Footer>
		</>
	);
};

export default Layout;
