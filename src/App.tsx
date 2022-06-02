
import * as C from './App.styles';
import { Category } from './types/Category';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';

const App = () => {
  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Controle Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        ...aqui vai ficar o conteúdo...
        {/* Área de Informações */}

        {/* Área de Inserção */}

        {/* Tabela de dados */}
      </C.Body>
    </C.Container>
  );
}

export default App;