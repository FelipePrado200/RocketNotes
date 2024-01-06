import styled from "styled-components";
export const Container = styled.div`
    width: 100%;


    >Button{
        margin-left: 600px;
        width: 337px;
        margin-left:55b0px;
        opacity: 1;
        margin-bottom: 100px;
    }

    >header{
        width: 100%;
        height: 144px;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900} ;
        display: flex;


        align-items: center;
        padding: 0 124px;

        svg{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-size: 24px;
        }
    }
`   

export const Form = styled.form`

    max-width: 340px;
    margin: 30px auto 0;

    >div:nth-child(4){

        margin-top: 24px;
    }


`


export const Avatar = styled.div`

    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;
    
    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    position: absolute;
    right: 7px;
    bottom: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: clamp(3.8rem, 2.8rem + 3.125vw, 4.8rem);
    height: clamp(3.8rem, 2.8rem + 3.125vw, 4.8rem);
    border-radius: 50%;

    cursor: pointer;
    > input {
      display: none;
    }
    > svg {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      font-size: 2rem;
    }
  }
`;

