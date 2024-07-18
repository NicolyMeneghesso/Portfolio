module ApplicationHelper

    def project_name(index)
        if index == 1
            "Spike"
        elsif index == 2
            "Projeto 2"
        else
            "Projeto #{index}"
        end
    end

end
