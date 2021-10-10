<?php

$current_page = str_replace(".php", "" , basename($_SERVER['PHP_SELF']));
$menu_items = [
  "index" => "Főoldal",
  "about" => "Rólunk",
  "job-listings" => "Sofőr állások",
  "job-single" => "job-single",
  "services" => "Szolgáltatásaink",
  "contact" => "Kapcsolat",
]

?>

<?php include 'head.php'; ?>

<div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div> <!-- .site-mobile-menu -->


    <!-- NAVBAR -->
    <header class="site-navbar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="site-logo col-6"><a data-to="home-section">soforallasok.com</a></div>

          <nav class="mx-auto site-navigation">
            <ul class="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li><a href="#home-section" data-to="home-section">Főoldal</a></li>
              <li><a href="#jobs-section" data-to="jobs-section">Sofőr állások</a></li>
              <li><a href="#about-section" data-to="about-section">Rólunk</a></li>
              <li><a href="blog-listings">Blog</a></li>
              <li class="d-lg-none"><a href="#contact-section" data-to="contact-section">Kapcsolat</a></li>
              <li class="d-lg-none"><a href="" class="post-job-btn mobile"><span class="mr-2 icon-plus"></span>Hirdetésfeladás</a></li>
            </ul>
          </nav>
          <div class="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div class="ml-auto">
            <a href="" class="btn d-none d-lg-inline-block post-job-btn"><span class="mr-2 icon-plus"></span>Hirdetésfeladás</a>

              <a href="#contact-section" data-to="contact-section" class="btn btn-primary border-width-2 d-none d-lg-inline-block"><span
                  class="mr-2 icon-paper-plane"></span>Kapcsolat
              </a>
              
            </div>
            <a href="#" class="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span
                class="icon-menu h3 m-0 p-0 mt-2"></span></a>
          </div>
        </div>
      </div>
    </header>

    <div class="page-loader">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>

    <?php 
      //include "page-upper.php";

      /* //Melyik oldalakon generálja le a page-upper.php tartalmát
      $page_upper_on_pages = ["about", "job-listings", /* "job-single" , "services", "contact" *];
      
      if(in_array($current_page, $page_upper_on_pages)) {
        generate_page_upper($menu_items[$current_page]);
      } */
      
    ?>
