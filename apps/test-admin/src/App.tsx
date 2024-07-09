import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { B2bSubmissionGogetaList } from "./b2bSubmissionGogeta/B2bSubmissionGogetaList";
import { B2bSubmissionGogetaCreate } from "./b2bSubmissionGogeta/B2bSubmissionGogetaCreate";
import { B2bSubmissionGogetaEdit } from "./b2bSubmissionGogeta/B2bSubmissionGogetaEdit";
import { B2bSubmissionGogetaShow } from "./b2bSubmissionGogeta/B2bSubmissionGogetaShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"test-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="B2bSubmissionGogeta"
          list={B2bSubmissionGogetaList}
          edit={B2bSubmissionGogetaEdit}
          create={B2bSubmissionGogetaCreate}
          show={B2bSubmissionGogetaShow}
        />
      </Admin>
    </div>
  );
};

export default App;
