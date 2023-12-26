import { Star } from "./Star";

type  StarsProps = {
    count: number;
}

export const Stars = ( {count}:StarsProps ) => {
    const arrStar = [];

    if(count < 1 && count > 5) {
        return null;
    }
    
    for (let i = 1; i <= count; i++) {
        arrStar.push(<Star key={i}/>);
    }

    return (
        <ul className="stars_List">
            {arrStar}
        </ul>
    );

}