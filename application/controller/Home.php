<?php

class Home extends Controller
{
  public function index()
  {
    $this->render('home', array(
      'metaTitle' => 'Mohd Sufiyan - Aspiring Full Stack Developer',
      'metaDescription' => 'Need a developer that can handle the full spectrum of your web-based software or app including back-end, front-end and server administration? Hook me up!'
    ));
  }
  
  public function about()
  {
    $age = $this->getAge();
    
    $this->render('about', array(
      'metaTitle' => 'About Mohd Sufiyan',
      'metaDescription' => 'Also known as Mosufy, aged '.$age.', Technopreneur, Software Engineer, UI/UX believer, PHP Developer.',
      'page' => 'about',
      'age' => $age
    ));
  }
  
  private function getAge()
  {
    $datenow = new DateTime();
    $bdate = new DateTime('1987-01-23');
    $interval = $datenow->diff($bdate);
    return $interval->y;
  }
}