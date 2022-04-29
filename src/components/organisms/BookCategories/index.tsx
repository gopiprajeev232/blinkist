import { Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useEffect, useState } from "react";
import { Card } from "../Card";

interface BookDisplayProps {
  id: number;
  title: string;
  author: string;
  timeToRead: string;
  numberOfReads: string;
  image: string;
  status: {
    isTrending: boolean;
    isFinished: boolean;
    isFeatured: boolean;
    justAdded: boolean;
  };
}

interface CardProps {
  data: Array<BookDisplayProps>;
  status?: string;
}

let MainContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "25px 30px",
  width: 1200
});

let useStyles = makeStyles({
    title: {
        fontSize: "24px !important",
        fontWeight: "700 !important",
        color: '#03314B'
    }
})

const Categories = (props: CardProps) => {
  let {data, status} = props
  const [showData, setShowData] = useState(data);
  const [title, setTitle] = useState("")

  let styles = useStyles()

  let filterBooks = (status: string) => {
    if (status === "featured") {
      setShowData(showData.filter((item) => item.status.isFeatured));
      setTitle("Featured")

    } else if(status === "trending") {
        setShowData(showData.filter((item) => item.status.isTrending))
        setTitle("Trending")
    }

    else if(status === "justAdded") {
      setShowData(showData.filter((item) => item.status.justAdded));
      setTitle("Just Added")
    }
  };

  useEffect(() => {
    if (status === "trending") {
      filterBooks("trending");
    } else if (status === "featured") {
      filterBooks("featured");
    } else {
      filterBooks("justAdded");
    }
  }, [status]);

  return (
    <>
      <Typography variant="h3" className={styles.title}>{title}</Typography>
      <MainContainer>
        {showData.map((book, key) => {
          return (
            <Card
              id={book.id}
              key={key}
              title={book.title}
              author={book.author}
              timeToRead={book.timeToRead}
              numberOfReads={book.numberOfReads}
              image={book.image}
              isFinished={book.status.isFinished}
              addToLibrary={true}
              value={book.id}
            />
          );
        })}
      </MainContainer>
    </>
  );
};
export default Categories;