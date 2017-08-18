<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr-fr" lang="fr-fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="informatique, université, université de cergy-pontoise, cergy, pontoise, ingénierie, ingénieur, systèmes embarqués, systèmes temps-réel, réseau, architecture, algorithme, algorithmique, bases de données, systèmes complexes, pro, recherche, alternance, licence, master, licence pro, licence professionnelle, diplôme universitaire, bac+3, bac+5, développement web, développement mobile, webdesign, webdesigner, multimédia, application mobile, robotique, intelligence artificielle, systèmes communiquants, électronique, sécurité, signal, télécommunications, big data, masses de données, systèmes distribués">
    <meta name="description" content="Intéressé par les sciences informatiques ? Venez étudier au Département des Sciences Informatiques de l&#39;université de Cergy-Pontoise !">
    <title>Département des Sciences Informatiques - Université de Cergy Pontoise</title>
    <link rel="stylesheet" href="./style/main.css" type="text/css">
    <link rel="stylesheet" href="./style/articles.css" type="text/css">
    <link rel="stylesheet" href="./style/font-benchnine.css" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type='text/css'>
    <link href="./style/favicon.ico" rel="shortcut icon">
    <link href='https://fonts.googleapis.com/css?family=BenchNine' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="./js/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="./js/main.js" type="text/javascript"></script>
</head>

<body>
    <div id="wrapper">
    <header>
        <a id="show-menu" onclick="$('#menu').addClass('on');" href="javascript:void(0);">&#9776;</a>
        <table id="header"><tr>
        <td class="logo-depinfo"><a id="logo-depinfo" href="#/"><img src="img/logo-depinfo.png"></a></td>
        <td class="logo-ucp"><a id="logo-ucp" href="https://www.u-cergy.fr/"><img src="img/logo-ucp.png"></a></td>
        </tr>
        <tr><td colspan=3 height=1px class="menu">
        <ul id="menu">
            <li><a href="#licence/">Licence</a></li>
            <li class="with-submenu">
                <a href="#licence/pro">Licences pro</a>
                <div class="submenu"><ul>
                    <li><a href="#licence/lpcccm/">LPCCCM - Chargé de communication culturelle et multimédia</a></li>
                    <li><a href="#licence/lpdw/">LPDW - Développeur web</a></li>
                    <li><a href="#licence/lpiwm/">LPIWM - Infographie, webdesign et multimédia</a></li>
                    <li><a href="#licence/lpipvm/">LPIPVM - Infographie, patrimoine, visualisation et modélisation 3D</a></li>
                    <li><a href="#licence/lprs/">LPRS - Réseaux et Sécurité</a></li>
                    <li><a href="#licence/lpwam/">LPWAM - Web et applications mobiles</a></li>
                </ul></div>
            </li>
            <li class="with-submenu">
                <a href="#master2/">Master</a>
                <div class="submenu"><ul>
                    <li><a href="#master1/">M1-IISC - Master 1</a></li>
                    <li><a href="#master2/rs/">M2-IISC-Pro - RS (Réseaux et Sécurité)</a></li>
                    <li><a href="#master2/sid/">M2-IISC-Pro - SID (Systèmes Intelligents et Distribués)</a></li>
                    <li><a href="#master2/strc/">M2-IISC-Pro - STRC (Systèmes Temps-Réel et Communicants)</a></li>
                    <li><a href="#master2/esa/">M2-IISC-Recherche - ESA (Electronique des Systèmes Autonomes)</a></li>
                    <li><a href="#master2/imd/">M2-IISC-Recherche - IMD (Images et Masses de Données)</a></li>
                    <li><a href="#master2/iar/">M2-IISC-Recherche - IAR (Intelligence Artificielle et Robotique)</a></li>
                    <li><a href="#master2/madocs/">M2-IISC-Recherche - MADOCS (Modélisation pour l'Analyse des Données Complexes)</a></li>
                    <li><a href="#master2/st/">M2-IISC-Recherche - ST (Signal et Télécommunications)</a></li>
                    <li><a href="#master2/iten/">M2-IISC-Recherche - ITEN (Innovations Technologiques et Entrepreneuriat)</a></li>
                </ul></div>
            </li>
            <li><a href="https://depinfo.u-cergy.fr/cmi/">CMI</a></li>
            <li><a href="#relations-entreprises/">Relations Entreprises</a></li>
            <li><a href="#vie-etudiante/">Vie etudiante</a></li>
            <!-- <li><a href="#presse/">Presse</a></li> -->
            <li><a href="#contacts/">Contacts</a></li>

            <form action="./" method="get"><input placeholder="Rechercher..." type=text name="q"></input></form>
            <ul id="social">
                <li><a href="https://www.facebook.com/UniversiteCergyPontoise/?ref=tn_tnmn"><img src="img/facebook.png"></a></li>
                <li><a href="https://twitter.com/UniversiteCergy"><img src="img/twitter.png"></a></li>
                <li><a href="https://plus.google.com/+universitecergy/posts"><img src="img/googleplus.png"></a></li>
                <li><a href="https://www.instagram.com/univcergy/"><img src="img/instagram.png"></a></li>
            </ul>

            <img class="close" src="img/back.png" onclick="$('#menu').removeClass('on');">

        </ul>
        </td></tr>
        </table>
    </header>


    <table id="page"><tr>
    <td class="left">
    <div id="categories">
        <?php
            $news_dir = scandir('pages/categories');
            foreach($news_dir as $v) {
                if($v == '.' || $v == '..') continue;
        ?>
            <div class="category">
              <?php include('pages/categories/'.$v); ?>
            </div>
        <?php
            }
         ?>

    </div>
    </td>

    <td class="center" width="*">
        <div>
    <a class="back" href="#/"><img src="img/back.png"></a>
    <div id="content">
        <?php include('pages/articles/main.html'); ?>
    </div>
    <div>
    </td>

    <td class='right'>
    <div id="news">
    <?php
        $news_dir = scandir('pages/news');
        foreach($news_dir as $v) {
            if($v == '.' || $v == '..') continue;
    ?>
        <div class="news">
            <?php include('pages/news/'.$v); ?>
        </div>
    <?php
        }
     ?>

    </div>
    </td>


    </tr></table>
    </div>

    <footer>©2016 - Département des sciences informatiques de l'Université de Cergy-Pontoise</footer>
</body>
