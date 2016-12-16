<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr-fr" lang="fr-fr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="informatique, université, université de cergy-pontoise, cergy, pontoise, ingénierie, ingénieur, systèmes embarqués, systèmes temps-réel, réseau, architecture, algorithme, algorithmique, bases de données, systèmes complexes, pro, recherche, alternance, licence, master, licence pro, licence professionnelle, diplôme universitaire, bac+3, bac+5, développement web, développement mobile, webdesign, webdesigner, multimédia, application mobile, robotique, intelligence artificielle, systèmes communiquants, électronique, sécurité, signal, télécommunications, big data, masses de données, systèmes distribués">
    <meta name="description" content="Intéressé par les sciences informatiques ? Venez étudier au Département des Sciences Informatiques de l&#39;université de Cergy-Pontoise !">
    <title>Université de Cergy Pontoise - Département des Sciences Informatiques</title>
    <link rel="stylesheet" href="./style/main.css" type="text/css">
    <link rel="stylesheet" href="./style/articles.css" type="text/css">
    <link rel="stylesheet" href="./style/font-benchnine.css" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=BenchNine' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="./js/jquery.min.js" type="text/javascript"></script>
    <script type="text/javascript" src="./js/main.js" type="text/javascript"></script>
</head>

<body>

    <button id="update">Detecter les changements</button>
    <button id="publish">Publier</button>
    <button id="update-2">###Detecter les changements###</button>
    <button id="publish-2">###Publier###</button>

    <div id="wrapper">
    <header>
        <table id="header"><tr>
        <td class="logo-depinfo"><a id="logo-depinfo" href="#/"><img src="img/logo-depinfo.png"></a></td>
        <td class="logo-ucp"><a id="logo-ucp" href="https://www.u-cergy.fr/"><img src="img/logo-ucp.png"></a></td>
        </tr>
        <tr><td colspan=3 height=1px class="menu">
        <ul id="menu">
            <li><a href="#licence/">Licence</a></li>
            <li class="with-submenu">
                <a href="javascript:void(0)">Licences pro</a>
                <div class="submenu"><ul>
                    <li><a href="#licence/lpcccm/">LPCCCM - Chargé de communication culturelle et multimédia</a></li>
                    <li><a href="#licence/lpdw/">LPDW - Développeur web</a></li>
                    <li><a href="#licence/lpiwm/">LPIWM - Infographie, webdesign et multimédia</a></li>
                    <li><a href="#licence/lprs/">LPRS - Réseaux et Sécurité</a></li>
                    <li><a href="#licence/lpwam/">LPWAM - Web et applications mobiles</a></li>
                </ul></div>
            </li>
            <li class="with-submenu">
                <a href="javascript:void(0)">Master</a>
                <div class="submenu"><ul>
                    <li><a href="#master1/">M1-IISC - Master 1</a></li>
                    <li><a href="#master2/pro">M2-IISC-Pro - Master 2 Professionnel</a></li>
                    <li><a href="#master2/recherche">M2-IISC-R - Master 2 Recherche</a></li>
                </ul></div>
            </li>
            <li><a href="#cmi/">CMI</a></li>
            <li><a href="#relations-entreprises/">Relations Entreprises</a></li>
            <li><a href="#vie-etudiante/">Vie etudiante</a></li>
            <li><a href="#presse/">Presse</a></li>
            <li><a href="#contacts/">Contacts</a></li>

            <form action="./" method="get"><input value="Rechercher..." type=text name="q"></input></form>
            <ul id="social">
                <li><a href="https://www.facebook.com/UniversiteCergyPontoise/?ref=tn_tnmn"><img src="img/facebook.png"></a></li>
                <li><a href="https://twitter.com/UniversiteCergy"><img src="img/twitter.png"></a></li>
                <li><a href="https://plus.google.com/+universitecergy/posts"><img src="img/googleplus.png"></a></li>
                <li><a href="https://www.instagram.com/univcergy/"><img src="img/instagram.png"></a></li>
            </ul>

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
        <?php include('pages/main.html'); ?>
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
