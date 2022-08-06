import styled from "styled-components";

export const ContainerFooter = styled.footer `
    width: 100%;
    height: 49px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid lightgray;
    bottom: 0;
    background-color: #fff;
    position: fixed;
    .icon {
        font-size: 25px;
        color: #B8B8B8;
        :hover {
            color: #5CB646;
            cursor: pointer;
        }
    }
`;

export const Icon = styled.img`
width: 27px;
`