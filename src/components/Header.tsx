import {useGetRepoDetailsQuery} from '../store/queryIssues';

const Header = () => {
    const { data, error, isLoading } = useGetRepoDetailsQuery({ owner: "facebook", repo: "react" });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading repo details</p>;

    return (
        <div>
            <a href={data?.owner.html_url} target="_blank"><p>{data?.owner.login}&gt;{data!.repository}⭐ {data?.stars/1000}k Stars</p></a>
        </div>
    );
};

export default Header;