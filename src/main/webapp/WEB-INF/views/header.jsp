<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
    String fullPath = request.getRequestURI();
    int lastSlashIndex = fullPath.lastIndexOf('/');
    String uri = fullPath.substring(lastSlashIndex);
    pageContext.setAttribute("uri", uri);
%>

<header class="header--main-page">

    <c:choose>

        <c:when test="${uri == '/index.jsp'}">
        <%--index--%>
        <nav class="container container--70">
            <ul class="nav--actions">
                <li><a href="#" class="btn btn--small btn--without-border">Zaloguj</a></li>
                <li><a href="#" class="btn btn--small btn--highlighted">Załóż konto</a></li>
            </ul>

            <ul>
                <li><a href="#" class="btn btn--without-border active">Start</a></li>
                <li><a href="#" class="btn btn--without-border">O co chodzi?</a></li>
                <li><a href="#" class="btn btn--without-border">O nas</a></li>
                <li><a href="#" class="btn btn--without-border">Fundacje i organizacje</a></li>
                <li><a href="#" class="btn btn--without-border">Kontakt</a></li>
            </ul>
        </nav>

        <div class="slogan container container--90">
            <div class="slogan--item">
                <h1>
                    Zacznij pomagać!<br/>
                    Oddaj niechciane rzeczy w zaufane ręce
                </h1>
            </div>
        </div>
        <%--/index--%>
        </c:when>

        <c:when test="${uri == '/form.jsp'}">
        <%--form--%>
            <header class="header--form-page">
                <nav class="container container--70">
                    <ul class="nav--actions">
                        <li class="logged-user">
                            Witaj Agata
                            <ul class="dropdown">
                                <li><a href="#">Profil</a></li>
                                <li><a href="#">Moje zbiórki</a></li>
                                <li><a href="#">Wyloguj</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul>
                        <li><a href="index.html" class="btn btn--without-border active">Start</a></li>
                        <li><a href="index.html#steps" class="btn btn--without-border">O co chodzi?</a></li>
                        <li><a href="index.html#about-us" class="btn btn--without-border">O nas</a></li>
                        <li><a href="index.html#help" class="btn btn--without-border">Fundacje i organizacje</a></li>
                        <li><a href="index.html#contact" class="btn btn--without-border">Kontakt</a></li>
                    </ul>
                </nav>

                <div class="slogan container container--90">
                    <div class="slogan--item">
                        <h1>
                            Oddaj rzeczy, których już nie chcesz<br />
                            <span class="uppercase">potrzebującym</span>
                        </h1>

                        <div class="slogan--steps">
                            <div class="slogan--steps-title">Wystarczą 4 proste kroki:</div>
                            <ul class="slogan--steps-boxes">
                                <li>
                                    <div><em>1</em><span>Wybierz rzeczy</span></div>
                                </li>
                                <li>
                                    <div><em>2</em><span>Spakuj je w worki</span></div>
                                </li>
                                <li>
                                    <div><em>3</em><span>Wybierz fundację</span></div>
                                </li>
                                <li>
                                    <div><em>4</em><span>Zamów kuriera</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <%--/form--%>
        </c:when>

        <c:when test="${uri == '/form-confirmation'}">
            <%--form-confirmation--%>
            <header class="header--form-page">
                <nav class="container container--70">
                    <ul class="nav--actions">
                        <li class="logged-user">
                            Witaj Agata
                            <ul class="dropdown">
                                <li><a href="#">Profil</a></li>
                                <li><a href="#">Moje zbiórki</a></li>
                                <li><a href="#">Wyloguj</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul>
                        <li><a href="index.html" class="btn btn--without-border active">Start</a></li>
                        <li><a href="index.html#steps" class="btn btn--without-border">O co chodzi?</a></li>
                        <li><a href="index.html#about-us" class="btn btn--without-border">O nas</a></li>
                        <li><a href="index.html#help" class="btn btn--without-border">Fundacje i organizacje</a></li>
                        <li><a href="index.html#contact" class="btn btn--without-border">Kontakt</a></li>
                    </ul>
                </nav>

                <div class="slogan container container--90">
                    <h2>
                        Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie
                        informacje o odbiorze.
                    </h2>
                </div>
            </header>
            <%--/form-confirmation--%>
        </c:when>

        <c:when test="${uri == '/login.jsp' || uri == 'regiser.jsp'}">
            <%--login||register--%>
            <header>
                <nav class="container container--70">
                    <ul class="nav--actions">
                        <li><a href="#">Zaloguj</a></li>
                        <li class="highlighted"><a href="#">Załóż konto</a></li>
                    </ul>

                    <ul>
                        <li><a href="index.html" class="btn btn--without-border active">Start</a></li>
                        <li><a href="index.html#steps" class="btn btn--without-border">O co chodzi?</a></li>
                        <li><a href="index.html#about-us" class="btn btn--without-border">O nas</a></li>
                        <li><a href="index.html#help" class="btn btn--without-border">Fundacje i organizacje</a></li>
                        <li><a href="index.html#contact" class="btn btn--without-border">Kontakt</a></li>
                    </ul>
                </nav>
            </header>
            <%--/login||register--%>
        </c:when>

    </c:choose>
</header>
