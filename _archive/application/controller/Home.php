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
  
  public function projects()
  {    
    $this->render('projects', array(
      'metaTitle' => 'My Projects - Mohd Sufiyan',
      'metaDescription' => 'The projects I have led and developed, published under my own name.',
      'page' => 'projects'
    ));
  }
  
  public function contact()
  {    
    $this->render('contact', array(
      'metaTitle' => 'Say Hello - Mohd Sufiyan',
      'metaDescription' => 'Looking for a developer? Hook me up for your next project.',
      'page' => 'contact'
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