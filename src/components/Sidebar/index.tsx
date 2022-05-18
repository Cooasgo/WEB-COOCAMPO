import { Container, OptionList, Nav, Ul, Link, Text } from './styles';
import { FiSettings } from 'react-icons/fi';

export default function Sidebar() {
  return (
    <Container>
      <Nav>
        <Ul>
          <OptionList className="nav-item">
            <Link>
              <FiSettings color="#f2c811" size={16} />
              <Text>
                <span>Menu inicial</span>
              </Text>
            </Link>
          </OptionList>

          <OptionList className="nav-item">
            <Link>
              <FiSettings color="#f2c811" size={16} />
              <Text>Menu inicial</Text>
            </Link>
          </OptionList>

          <OptionList className="nav-item">
            <Link>
              <FiSettings color="#f2c811" size={16} />
              <Text>Menu inicial</Text>
            </Link>
          </OptionList>

          <OptionList className="nav-item">
            <Link>
              <FiSettings color="#f2c811" size={16} />
              <Text>Menu inicial</Text>
            </Link>
          </OptionList>

          <OptionList className="nav-item">
            <Link>
              <FiSettings color="#f2c811" size={16} />
              <Text>Menu inicial</Text>
            </Link>
          </OptionList>
        </Ul>
      </Nav>
    </Container>
  );
}
