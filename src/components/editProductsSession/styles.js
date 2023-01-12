import styled from "styled-components";

export const Container = styled.section`
.productCard{
    > .crud{
        > .editDropdown{
            > ul{
                display: block;
                z-index: 1;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-20px);
                transition: 0.2s ease;
            }

            > #editShow{
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
        }
    }
}
`