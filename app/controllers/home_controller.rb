class HomeController < ApplicationController
  def index

    @skills = [
      { image: 'logo-html.png', alt: 'Logo-html', name: 'HTML' },
      { image: 'logo-css.png', alt: 'Logo-css', name: 'CSS' },
      { image: 'logo-js.png', alt: 'Logo-js', name: 'JavaScript' },
      { image: 'logo-bootstrap.png', alt: 'Logo-bootstrap', name: 'Bootstrap' },
      { image: 'logo-github.png', alt: 'Logo-github', name: 'GitHub' },
      { image: 'logo-autocad.png', alt: 'Logo-autocad', name: 'AutoCad' },
    ]
  end
end

