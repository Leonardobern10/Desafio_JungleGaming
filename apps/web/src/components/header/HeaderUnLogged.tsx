import NavBarListItem from "./NavBarListItem";

export default function HeaderUnLogged() {
  return (
    <>
      <NavBarListItem name="Login" path="/auth/login" />
      <NavBarListItem name="Cadastro" path="/auth/register" />
    </>
  );
}
