# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ProjectCard.create(
    title:"Meu primeiro blog",
    image: 'projeto-blog.png',
    description: 'Neste projeto, criei um blog simples dedicado à história de Ada Lovelace, considerada a primeira programadora da história.',
    github_link: 'https://github.com/NicolyMeneghesso/Projeto_Blog_old',
    modal_image: 'historia.png',
    modal_description: '<section class="text-modal mb-4">
                                    <p>Este é o meu primeiro projeto de blog, criado como parte do meu 
                                        aprendizado em tecnologias web. Utilizando Ruby on Rails no back-end e HTML/CSS para a estrutura e 
                                        estilização, desenvolvi um blog dedicado a contar a história de Ada Lovelace, a primeira programadora 
                                        da história. O foco está em explorar sua vida, contribuições e legado, proporcionando uma aplicação 
                                        prática das ferramentas e conceitos que venho estudando.</p>
                                </section>

                                <section class="text-modal mb-5">
                                    <h5 class="mb-3">Tema do Blog: Ada Lovelace</h5>
                                    <p>O blog é dedicado a Ada Lovelace, uma das figuras mais importantes na 
                                        história da computação. O conteúdo do blog foca nos seguintes tópicos:</p>
                                    <ul>
                                        <li>História de Ada Lovelace: Uma visão geral de sua vida e realizações.</li>
                                        <li>Parceria com Charles Babbage: Como Ada colaborou com Babbage no desenvolvimento da "Máquina 
                                            Analítica" e escreveu o primeiro algoritmo para ser processado por uma máquina. </li>
                                        <li>Legado e Reconhecimento: O impacto de Ada Lovelace na história da computação e 
                                            como seu trabalho é celebrado até hoje.</li>
                                    </ul>
                                </section>'
)
