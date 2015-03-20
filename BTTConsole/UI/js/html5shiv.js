


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>web-api-self-host/html5shiv.js at master · dotnetcurry/web-api-self-host</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="dotnetcurry/web-api-self-host" name="twitter:title" /><meta content="web-api-self-host - A Sample demonstrating how to Self Host Web API services and access them over HTML" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/1701844?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/1701844?v=3&amp;s=400" property="og:image" /><meta content="dotnetcurry/web-api-self-host" property="og:title" /><meta content="https://github.com/dotnetcurry/web-api-self-host" property="og:url" /><meta content="web-api-self-host - A Sample demonstrating how to Self Host Web API services and access them over HTML" property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="BA069D80:394F:1B7D799:550C265F" name="octolytics-dimension-request_id" /><meta content="435419" name="octolytics-actor-id" /><meta content="lasantiago" name="octolytics-actor-login" /><meta content="3b2014fbbf5275e2ddc33de1a572a59f9e50f6c3bcfa6f810ed318d934b08810" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="Dcr3p3gA902LH0s6ONIFyvzndSfjDWGnaSonlAQDSaWwp+bwUXMaJ/AYf2Qe7cGED8iGrZgYSa+WNc4V7TCp+g==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-55248dbd68209adb1e8e0b38d97d9261138788d3edf4ed9a68e394a40ad31aef.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-f6dc14b9b985cbf75d063b2aaced60379f23e152b5997d194d5fcd0a53f3df7d.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="696bab1b5708b9cad0bc42b8d131a167">

      
  <meta name="description" content="web-api-self-host - A Sample demonstrating how to Self Host Web API services and access them over HTML">
  <meta name="go-import" content="github.com/dotnetcurry/web-api-self-host git https://github.com/dotnetcurry/web-api-self-host.git">

  <meta content="1701844" name="octolytics-dimension-user_id" /><meta content="dotnetcurry" name="octolytics-dimension-user_login" /><meta content="10135345" name="octolytics-dimension-repository_id" /><meta content="dotnetcurry/web-api-self-host" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="10135345" name="octolytics-dimension-repository_network_root_id" /><meta content="dotnetcurry/web-api-self-host" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/dotnetcurry/web-api-self-host/commits/master.atom" rel="alternate" title="Recent Commits to web-api-self-host:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      


        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/dotnetcurry/web-api-self-host/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/dotnetcurry/web-api-self-host/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/lasantiago" data-ga-click="Header, go to profile, text:username">
      <img alt="@lasantiago" class="avatar" data-user="435419" height="20" src="https://avatars2.githubusercontent.com/u/435419?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">lasantiago</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="dotnetcurry/web-api-self-host">This repository</span>
    </li>
      <li>
        <a href="/dotnetcurry/web-api-self-host/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="cHwWanXxGV4KvnV37HRixLZ1FIPjGjVRZ8PL/JheDFTsE5XidH/ZyBr+SLE3ub71Aq3X4ZqnbyinGeQLIjoaaA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

        

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MqDpj32V3NdSA9j33vkz8Non4nX9VlX4h4KeMVETT+1ndpsfi3sKaR2ysIPL8AKgWJ8cOKAIWGcoi6X2jaJXlw==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="10135345" />

      <div class="select-menu js-menu-container js-select-menu">
        <a href="/dotnetcurry/web-api-self-host/subscription"
          class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
          data-ga-click="Repository, click Watch settings, action:blob#show">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>
        <a class="social-count js-social-count" href="/dotnetcurry/web-api-self-host/watchers">
          1
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/dotnetcurry/web-api-self-host/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="W6uufVRk9atcaRXdmXFBVFKfiw2j7lxGYnr0PPwyr5PylibTNkqD7p/GtJ8VcIbuBllIqIqqdLdeYLD1vhIgpg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar dotnetcurry/web-api-self-host"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/dotnetcurry/web-api-self-host/stargazers">
          2
        </a>
</form>
    <form accept-charset="UTF-8" action="/dotnetcurry/web-api-self-host/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="h9mf5Qpg85Cu2bRriqMiZVU0u0Hxrf1qJljX7xG3URqaacgyC0g/ilY87X2ywnSHzvQ2YZUpi/K5XRERCIst9Q==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star dotnetcurry/web-api-self-host"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/dotnetcurry/web-api-self-host/stargazers">
          2
        </a>
</form>  </div>

  </li>

        <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of dotnetcurry/web-api-self-host to your account"
              aria-label="Fork your own copy of dotnetcurry/web-api-self-host to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/dotnetcurry/web-api-self-host/network" class="social-count">3</a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/dotnetcurry/web-api-self-host/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-128-338974454bb5c32803e82f601beb051d373744b024fe8742a76009700fd7e033.gif" width="64" />
            </include-fragment>
          </div>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/dotnetcurry" class="url fn" itemprop="url" rel="author"><span itemprop="title">dotnetcurry</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/dotnetcurry/web-api-self-host" class="js-current-repository" data-pjax="#js-repo-pjax-container">web-api-self-host</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/dotnetcurry/web-api-self-host/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/dotnetcurry/web-api-self-host" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /dotnetcurry/web-api-self-host">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/dotnetcurry/web-api-self-host/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /dotnetcurry/web-api-self-host/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/dotnetcurry/web-api-self-host/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /dotnetcurry/web-api-self-host/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/dotnetcurry/web-api-self-host/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /dotnetcurry/web-api-self-host/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/dotnetcurry/web-api-self-host/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /dotnetcurry/web-api-self-host/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/dotnetcurry/web-api-self-host/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /dotnetcurry/web-api-self-host/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/dotnetcurry/web-api-self-host.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:dotnetcurry/web-api-self-host.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/dotnetcurry/web-api-self-host" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/dotnetcurry/web-api-self-host" class="btn btn-sm sidebar-button" title="Save dotnetcurry/web-api-self-host to your computer and use it in GitHub Desktop." aria-label="Save dotnetcurry/web-api-self-host to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/dotnetcurry/web-api-self-host/archive/master.zip"
                   class="btn btn-sm sidebar-button"
                   aria-label="Download the contents of dotnetcurry/web-api-self-host as a zip file"
                   title="Download the contents of dotnetcurry/web-api-self-host as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/dotnetcurry/web-api-self-host/blob/95a0c5a7dfd4604dfaf682c78d5e90f30e0a3007/HtmlClient/js/html5shiv.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:0d2e1af828e2d49d76660d7caa83669f -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/dotnetcurry/web-api-self-host/blob/master/HtmlClient/js/html5shiv.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/dotnetcurry/web-api-self-host/find/master"
          class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dotnetcurry/web-api-self-host" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">web-api-self-host</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dotnetcurry/web-api-self-host/tree/master/HtmlClient" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">HtmlClient</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/dotnetcurry/web-api-self-host/tree/master/HtmlClient/js" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">html5shiv.js</strong>
  </div>
</div>

<include-fragment class="commit commit-loader file-history-tease" src="/dotnetcurry/web-api-self-host/contributors/master/HtmlClient/js/html5shiv.js">
  <div class="file-history-tease-header">
    Fetching contributors&hellip;
  </div>

  <div class="participation">
    <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-EAF2F5-0bdc57d34b85c4a4de9d0d1db10cd70e8a95f33ff4f46c5a8c48b4bf4e5a9abe.gif" width="16" /></p>
    <p class="loader-error">Cannot retrieve contributors at this time</p>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/dotnetcurry/web-api-self-host/raw/master/HtmlClient/js/html5shiv.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/dotnetcurry/web-api-self-host/blame/master/HtmlClient/js/html5shiv.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/dotnetcurry/web-api-self-host/commits/master/HtmlClient/js/html5shiv.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/dotnetcurry/web-api-self-host?branch=master&amp;filepath=HtmlClient%2Fjs%2Fhtml5shiv.js"
           aria-label="Open this file in GitHub for Windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <form accept-charset="UTF-8" action="/dotnetcurry/web-api-self-host/edit/master/HtmlClient/js/html5shiv.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sCNuenxNmCOEGBwOkAsoA4iPTGsfOu7BPmauANdfjd2tRQRdTQ156UtZxB3Yq5nHpB9Ovhdogsg27j360BTtzQ==" /></div>
              <button class="octicon-btn tooltipped tooltipped-n" type="submit" aria-label="Clicking this button will fork this project so you can edit the file" data-hotkey="e" data-disable-with>
                <span class="octicon octicon-pencil"></span>
              </button>
</form>
          <form accept-charset="UTF-8" action="/dotnetcurry/web-api-self-host/delete/master/HtmlClient/js/html5shiv.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="L7WCV89sPUT6GcEVT21jZc/eChi2obgmxYySvjeNKmonxXz+aSPCJjZHdDR6C34Xkhsw2vkNC5An4NI3+shYCg==" /></div>
            <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-n" type="submit" aria-label="Fork this project and delete file" data-disable-with>
              <span class="octicon octicon-trashcan"></span>
            </button>
</form>    </div>

    <div class="file-info">
        9 lines (8 sloc)
        <span class="file-info-divider"></span>
      2.38 kb
    </div>
  </div>
  
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-c"> HTML5 Shiv v3.6.2 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="pl-c">*/</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">(<span class="pl-st">function</span>(<span class="pl-vpf">l</span>,<span class="pl-vpf">f</span>){<span class="pl-st">function</span> <span class="pl-en">m</span>(){<span class="pl-s">var</span> a<span class="pl-k">=</span>e.<span class="pl-sc">elements</span>;<span class="pl-k">return</span><span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> a<span class="pl-k">?</span>a.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>a}<span class="pl-st">function</span> <span class="pl-en">i</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> b<span class="pl-k">=</span>n[a[o]];b<span class="pl-k">||</span>(b<span class="pl-k">=</span>{},h<span class="pl-k">++</span>,a[o]<span class="pl-k">=</span>h,n[h]<span class="pl-k">=</span>b);<span class="pl-k">return</span> b}<span class="pl-st">function</span> <span class="pl-en">p</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>,<span class="pl-vpf">c</span>){b<span class="pl-k">||</span>(b<span class="pl-k">=</span>f);<span class="pl-k">if</span>(g)<span class="pl-k">return</span> b.<span class="pl-s3">createElement</span>(a);c<span class="pl-k">||</span>(c<span class="pl-k">=</span>i(b));b<span class="pl-k">=</span>c.cache[a]<span class="pl-k">?</span>c.cache[a].<span class="pl-s3">cloneNode</span>()<span class="pl-k">:</span>r.<span class="pl-s3">test</span>(a)<span class="pl-k">?</span>(c.cache[a]<span class="pl-k">=</span>c.createElem(a)).<span class="pl-s3">cloneNode</span>()<span class="pl-k">:</span>c.createElem(a);<span class="pl-k">return</span> b.canHaveChildren<span class="pl-k">&amp;&amp;!</span>s.<span class="pl-s3">test</span>(a)<span class="pl-k">?</span>c.frag.<span class="pl-s3">appendChild</span>(b)<span class="pl-k">:</span>b}<span class="pl-st">function</span> <span class="pl-en">t</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>b.cache)b.cache<span class="pl-k">=</span>{},b.createElem<span class="pl-k">=</span>a.createElement,b.createFrag<span class="pl-k">=</span>a.createDocumentFragment,b.frag<span class="pl-k">=</span>b.createFrag();</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-s3">a</span>.<span class="pl-en">createElement</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">c</span>){<span class="pl-k">return</span><span class="pl-k">!</span>e.shivMethods<span class="pl-k">?</span>b.createElem(c)<span class="pl-k">:</span>p(c,a,b)};a.createDocumentFragment<span class="pl-k">=</span><span class="pl-s3">Function</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>h,f<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&amp;&amp;(<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>m().<span class="pl-s3">join</span>().<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-st">function</span>(<span class="pl-vpf">a</span>){b.createElem(a);b.frag.<span class="pl-s3">createElement</span>(a);<span class="pl-k">return</span><span class="pl-s1"><span class="pl-pds">&#39;</span>c(&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;)<span class="pl-pds">&#39;</span></span>})<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>);return n}<span class="pl-pds">&quot;</span></span>)(e,b.frag)}<span class="pl-st">function</span> <span class="pl-en">q</span>(<span class="pl-vpf">a</span>){a<span class="pl-k">||</span>(a<span class="pl-k">=</span>f);<span class="pl-s">var</span> b<span class="pl-k">=</span>i(a);<span class="pl-k">if</span>(e.shivCSS<span class="pl-k">&amp;&amp;!</span>j<span class="pl-k">&amp;&amp;!</span>b.hasCSS){<span class="pl-s">var</span> c,d<span class="pl-k">=</span>a;c<span class="pl-k">=</span>d.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>p<span class="pl-pds">&quot;</span></span>);d<span class="pl-k">=</span>d.<span class="pl-s3">getElementsByTagName</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>head<span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>]<span class="pl-k">||</span>d.<span class="pl-sc">documentElement</span>;c.innerHTML<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>x&lt;style&gt;article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}&lt;/style&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">c<span class="pl-k">=</span>d.<span class="pl-s3">insertBefore</span>(c.<span class="pl-sc">lastChild</span>,d.<span class="pl-sc">firstChild</span>);b.hasCSS<span class="pl-k">=!!</span>c}g<span class="pl-k">||</span>t(a,b);<span class="pl-k">return</span> a}<span class="pl-s">var</span> k<span class="pl-k">=</span>l.html5<span class="pl-k">||</span>{},s<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>&lt;<span class="pl-k">|</span><span class="pl-k">^</span>(?:button<span class="pl-k">|</span>map<span class="pl-k">|</span>select<span class="pl-k">|</span>textarea<span class="pl-k">|</span>object<span class="pl-k">|</span>iframe<span class="pl-k">|</span>option<span class="pl-k">|</span>optgroup)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>,r<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:a<span class="pl-k">|</span>b<span class="pl-k">|</span>code<span class="pl-k">|</span>div<span class="pl-k">|</span>fieldset<span class="pl-k">|</span>h1<span class="pl-k">|</span>h2<span class="pl-k">|</span>h3<span class="pl-k">|</span>h4<span class="pl-k">|</span>h5<span class="pl-k">|</span>h6<span class="pl-k">|</span>i<span class="pl-k">|</span>label<span class="pl-k">|</span>li<span class="pl-k">|</span>ol<span class="pl-k">|</span>p<span class="pl-k">|</span>q<span class="pl-k">|</span>span<span class="pl-k">|</span>strong<span class="pl-k">|</span>style<span class="pl-k">|</span>table<span class="pl-k">|</span>tbody<span class="pl-k">|</span>td<span class="pl-k">|</span>th<span class="pl-k">|</span>tr<span class="pl-k">|</span>ul)<span class="pl-k">$</span><span class="pl-pds">/</span>i</span>,j,o<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>_html5shiv<span class="pl-pds">&quot;</span></span>,h<span class="pl-k">=</span><span class="pl-c1">0</span>,n<span class="pl-k">=</span>{},g;(<span class="pl-st">function</span>(){<span class="pl-k">try</span>{<span class="pl-s">var</span> a<span class="pl-k">=</span>f.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>);a.innerHTML<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;xyz&gt;&lt;/xyz&gt;<span class="pl-pds">&quot;</span></span>;j<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>hidden<span class="pl-pds">&quot;</span></span><span class="pl-k">in</span> a;<span class="pl-s">var</span> b;<span class="pl-k">if</span>(<span class="pl-k">!</span>(b<span class="pl-k">=</span><span class="pl-c1">1</span><span class="pl-k">==</span>a.<span class="pl-sc">childNodes</span>.<span class="pl-sc">length</span>)){f.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>a<span class="pl-pds">&quot;</span></span>);<span class="pl-s">var</span> c<span class="pl-k">=</span>f.<span class="pl-s3">createDocumentFragment</span>();b<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> c.cloneNode<span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> c.createDocumentFragment<span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">==typeof</span> c.createElement}g<span class="pl-k">=</span>b}<span class="pl-k">catch</span>(d){g<span class="pl-k">=</span>j<span class="pl-k">=!</span><span class="pl-c1">0</span>}})();<span class="pl-s">var</span> e<span class="pl-k">=</span>{elements<span class="pl-k">:</span>k.<span class="pl-sc">elements</span><span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video<span class="pl-pds">&quot;</span></span>,version<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>3.6.2<span class="pl-pds">&quot;</span></span>,shivCSS<span class="pl-k">:!</span><span class="pl-c1">1</span><span class="pl-k">!==</span>k.shivCSS,supportsUnknownElements<span class="pl-k">:</span>g,shivMethods<span class="pl-k">:!</span><span class="pl-c1">1</span><span class="pl-k">!==</span>k.shivMethods,type<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>default<span class="pl-pds">&quot;</span></span>,shivDocument<span class="pl-k">:</span>q,createElement<span class="pl-k">:</span>p,<span class="pl-en">createDocumentFragment</span>:<span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>){a<span class="pl-k">||</span>(a<span class="pl-k">=</span>f);<span class="pl-k">if</span>(g)<span class="pl-k">return</span> a.<span class="pl-s3">createDocumentFragment</span>();</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-k">for</span>(<span class="pl-s">var</span> b<span class="pl-k">=</span>b<span class="pl-k">||</span>i(a),c<span class="pl-k">=</span>b.frag.<span class="pl-s3">cloneNode</span>(),d<span class="pl-k">=</span><span class="pl-c1">0</span>,e<span class="pl-k">=</span>m(),h<span class="pl-k">=</span>e.<span class="pl-sc">length</span>;d<span class="pl-k">&lt;</span>h;d<span class="pl-k">++</span>)c.<span class="pl-s3">createElement</span>(e[d]);<span class="pl-k">return</span> c}};l.html5<span class="pl-k">=</span>e;q(f)})(<span class="pl-v">this</span>,<span class="pl-s3">document</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="btn">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.06867s from github-fe118-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d22b59d0085e83b7549ba4341ec9e68f80c2f29c8e49213ee182003dc8d568c6.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0bc0f45c838b5d9d25bc071d2a4b0abe759a093392087dce55cd2caa00ea4f36.js"></script>
      
      

  </body>
</html>

