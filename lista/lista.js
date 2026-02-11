// 🔥 SUPABASE
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://mvydlleewqflsvjdoofo.supabase.co";
const supabaseKey = "sb_publishable_JlPtZ6blsqdhVWTykvSldg_AzvLuWXq";

const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", async () => {
    const lista = document.getElementById("listaCadastros");
    const filtro = document.getElementById("filtro");

    if (!lista) return;

    async function carregarCadastros() {
        lista.innerHTML = "Carregando...";

        const { data, error } = await supabase
            .from("cadastros")
            .select("*")
            .order("nome", { ascending: true });

        if (error) {
            console.error(error);
            lista.innerHTML = "Erro ao carregar.";
            return;
        }

        lista.innerHTML = "";

        data.forEach(d => {
            const cpfParcial = d.cpf ? d.cpf.substring(0, 3) + "****" : "";

            const item = document.createElement("div");
            item.className = "cardCadastro";
            item.innerHTML = `
                <strong>${d.nome}</strong><br>
                📧 ${d.email}<br>
                🪪 ${cpfParcial}
            `;
            lista.appendChild(item);
        });
    }

    // 🔎 FILTRO POR NOME
    filtro.addEventListener("input", async () => {
        const texto = filtro.value.toLowerCase();

        // se o campo estiver vazio, recarrega todos os cadastros
        if (texto === "") {
            carregarCadastros();
            return;
        }

        const { data, error } = await supabase
            .from("cadastros")
            .select("*")
            .ilike("nome", `%${texto}%`);

        if (error) {
            console.error(error);
            return;
        }

        lista.innerHTML = "";

        data.forEach(d => {
            const cpfParcial = d.cpf ? d.cpf.substring(0, 3) + "****" : "";

            const item = document.createElement("div");
            item.className = "cardCadastro";
            item.innerHTML = `
                <strong>${d.nome}</strong><br>
                📧 ${d.email}<br>
                🪪 ${cpfParcial}
            `;
            lista.appendChild(item);
        });
    });

    carregarCadastros();
});

// 🌟 PARTÍCULAS
const container = document.querySelector(".particulas");
if (container) {
    for (let i = 0; i < 30; i++) {
        const p = document.createElement("span");
        p.classList.add("particula");
        p.style.left = Math.random() * 100 + "vw";
        p.style.animationDuration = 6 + Math.random() * 10 + "s";
        p.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(p);
    }
}
