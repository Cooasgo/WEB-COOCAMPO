import { Container, Nav, Ul } from './styles';
import { ListOptions } from './ListOptions';

export default function Sidebar() {
  return (
    <Container>
      <Nav>
        <Ul>
          <ListOptions />
        </Ul>
      </Nav>
    </Container>
  );
}
