import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../context/AuthContext"
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {

  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me').then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });

  }, []);

  return (
    <>
      <h1> Dashboard: {user?.email}</h1>
      <button onClick={signOut}>SignOut</button>

      <Can permissions={['metrics.list']} roles={['administrator']}>
        <div>Métricas</div>
      </Can>
    </>
  );

}

//Valida se existe cookie, caso contrario ele redireciona o usuario para a tela de login.
export const getServerSideProps = withSSRAuth(async (ctx) => {

  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/me');

  console.log(response);

  return {
    props: {}
  }

}, {
  permissions: ['metrics.list'],
  roles: ['administrator'],
});