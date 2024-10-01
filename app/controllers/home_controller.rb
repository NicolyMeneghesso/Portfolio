class HomeController < ApplicationController
  def index

    # @skills é uma variavel
    @skill_cards = SkillCard.all

    @project_cards = ProjectCard.all

    # ProjectCard.create(title: "Batatinha")
    # ProjectCard.where(title: 'Batatinha')&.delete_all
  end
end

