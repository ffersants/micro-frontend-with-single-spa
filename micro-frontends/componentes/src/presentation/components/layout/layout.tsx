import { useState } from "react";
import {
	Avatar,
	Container,
	Content,
	Dropdown,
	FlexboxGrid,
	Footer,
	Header,
	Icon,
	IconButton,
	Nav,
	Sidebar,
	Sidenav,
} from "rsuite";
import brasaoPcdf from "../../assets/logo.png";
import FlexboxGridItem from "rsuite/lib/FlexboxGrid/FlexboxGridItem";

const Layout = ({children}: {children: any}) => {
	const [showSidenav, setShowSidenav] = useState(false);
	
	return (
		<>
			<div className='black-bg'>
				<FlexboxGrid
					justify='space-between'
					align='middle'
					style={{
						gap: "20px",
					}}
				>
					<FlexboxGridItem>
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
								onClick={() => setShowSidenav(!showSidenav)}
								icon={<Icon icon='bars' style={{ color: "white" }} />}
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
								// onClick={() => history.push("/")}
							>
								DITEC AJUDA
							</p>
						</div>
					</FlexboxGridItem>

					<FlexboxGridItem>
						<Dropdown
							placement='bottomEnd'
							title={
								<div style={{ display: "flex", gap: "15px" }}>
									<Avatar size='md' circle>
										{/* <UserIcon /> */}
									</Avatar>
									<div style={{ textAlign: "left" }}>
										{/* <p
											title={`${user?.userName} - ${user?.userMatricula}`}
											className='uma-linha-com-ellipsis'
										>
											{user?.userName} - {user?.userMatricula}
										</p> */}
										<p>Fernando Santos Ferreira</p>
									</div>
								</div>
							}
						>
							<Dropdown.Item>Alterar senha</Dropdown.Item>
							<Dropdown.Item
								// onClick={() => {
								// 	auth.signoutRedirect();
								// }}
							>
								Sair
							</Dropdown.Item>
						</Dropdown>
					</FlexboxGridItem>
				</FlexboxGrid>
			</div>

			<Container>
				<Sidebar
					width={showSidenav ? 260 : 0}
					style={{
						transition: "all .2s  ease-in-out",
						backgroundColor: "white",
						boxShadow: "0px 0px 20px rgb(1 41 112 / 10%)",
					}}
				>
					<Sidenav>
						<Nav
							style={{
								backgroundColor: "white",
								fontFamily: 'Roboto, sans-serif'
							}}
						>
							<Nav.Item
								style={{ display: "block" }}
								hasTooltip={false}
								// onSelect={() => history.push("/home")}
								icon={<Icon icon='home' size='lg' />}
								// active={history.location.pathname === "/home"}
							>
								Home
							</Nav.Item>
							<Nav.Item
								style={{ display: "block" }}
								hasTooltip={false}
								// onSelect={() => history.push("/feed")}
								icon={<Icon icon='newspaper-o' size='lg' />}
								// active={history.location.pathname === "/feed" || history.location.pathname === "/" || history.location.pathname === ""}
							>
								Feed
							</Nav.Item>
							<Nav.Item
								style={{ display: "block" }}
								hasTooltip={false}
								// onSelect={() => history.push("/pesquisar-artigo")}
								icon={<Icon icon='search' size='lg' />}
								// active={history.location.pathname === "/pesquisar-artigo"}
							>
								Pesquisar artigo
							</Nav.Item>
						</Nav>
					</Sidenav>
				</Sidebar>
				<Content
					style={{
						padding: "2em 4em",
					}}
				>
					<Container>
						<Content style={{ minHeight: "100vh" }}>{children || ""}</Content>
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
	)
}

export default Layout