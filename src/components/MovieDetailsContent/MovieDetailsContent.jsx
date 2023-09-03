import { StyledSection } from './MovieDetailsContent.styled';

export const MovieDetailsContent = ({ content }) => {
  return (
    <StyledSection>
      <img src={content.backdropPath} alt={content.title} />
      <div>
        <h1>{content.title}</h1>
        <p>{`User Score: ${content.voteAverage ?? 'No Score'}`}</p>
        <h2>Overview</h2>
        <p>{content.overview}</p>
        <h2>Genres</h2>
        <p>{content.genres}</p>
      </div>
    </StyledSection>
  );
};
