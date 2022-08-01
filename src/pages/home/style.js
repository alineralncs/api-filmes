import styled from 'styled-components'

export const Container = styled.div` 

h1 {
    text-align: center;
    margin: 4rem 0;
}
padding: 40px;

`
export const MovieList = styled.ul` 
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 1rem;
    row-gap: 4rem;

`

export const Movie = styled.li` 
    display: flex;
    flex-direction: column;
    align-items: center;

img {
    width: 200px;
    border-radius: 1rem;
    margin-bottom: 2rem;
}

span {
    font-weight: bold;
}

a {
    transition: all 0.3s;
}
a:hover {
    transform: scale(1.1);
}
`