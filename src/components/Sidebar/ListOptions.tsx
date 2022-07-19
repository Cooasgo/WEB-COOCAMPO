import {
  FiUser,
  FiMapPin,
  FiShoppingCart,
  FiCalendar,
  FiTool,
} from 'react-icons/fi';
import { RiSeedlingLine, RiSyringeLine } from 'react-icons/ri';
import { GiCow } from 'react-icons/gi';
import { Link, OptionList } from './styles';
import { Tooltip } from './Tooltip';

export function ListOptions() {
  return (
    <>
      <Tooltip label="Meus dados">
        <OptionList className="nav-item">
          <Link>
            <FiUser color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      <Tooltip label="Propriedades">
        <OptionList className="nav-item">
          <Link>
            <FiMapPin color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      <Tooltip label="Pastagem">
        <OptionList className="nav-item">
          <Link>
            <RiSeedlingLine color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      <Tooltip label="Suplementação">
        <OptionList className="nav-item">
          <Link>
            <GiCow color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      <Tooltip label="Vacinação">
        <OptionList className="nav-item">
          <Link>
            <RiSyringeLine color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
      {/* <Tooltip label="Vacinação">
        <OptionList className="nav-item">
          <Link>
            <FiShoppingCart color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip> */}

      <Tooltip label="Calendario">
        <OptionList className="nav-item">
          <Link>
            <FiCalendar color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>

      <Tooltip label="Área do técnico">
        <OptionList className="nav-item">
          <Link>
            <FiTool color="white" size={20} />
          </Link>
        </OptionList>
      </Tooltip>
    </>
  );
}
