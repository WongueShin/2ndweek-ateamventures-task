import React from "react";
import * as S from "Components/Nav/style.Nav";

function Nav(): JSX.Element {
    return(
        <>
            <S.Nav>
                <S.Logo/>
                <S.UserInfo>
                    <S.UserIcon/>
                </S.UserInfo>
            </S.Nav>
        </>
    )
}

export default Nav