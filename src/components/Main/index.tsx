import Table from "../Table"
import useCandidate from '../../utils/useCandidate';
import { Headings } from './config';

const Main = () => {
    const { candidates, isLoading } = useCandidate();
    return <Table
        headings={Headings}
        rows={candidates}
        isLoading={isLoading}
    />
}

export default Main;