import styled from "styled-components"

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language= styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer= styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`
const Search= styled.div`
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search>s</Search>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>TheKnower Shop .</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOG IN</MenuItem>
                    <MenuItem></MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
