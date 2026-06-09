// Add an author's display name and preferred profile URL here to link every occurrence.
const authorLinks = {
  "Karthik Dharmarajan": "https://kdharmarajan.com/",
  "Ruohan Zhang": "https://ruohanzhang.com/",
  "Jiajun Wu": "https://jiajunwu.com/",
  "Li Fei-Fei": "https://profiles.stanford.edu/fei-fei-li",
  "Ken Goldberg": "https://goldberg.berkeley.edu/",
  "Sophea Bonne": "https://www.linkedin.com/in/sophea-bonne/",
  "Will Panitch": "https://willchp.github.io/",
  "Kishore Srinivas": "https://www.linkedin.com/in/kishore-srinivas/",
  "Jerri-Lynn Kincade": "https://www.linkedin.com/in/jerri-lynn-kincade-115473b9/",
  "Thomas Low": "https://www.linkedin.com/in/thomas-low-3a760/",
  "Bruce Knoth": "https://www.linkedin.com/in/bruce-knoth-352b5bb/",
  "Cregg Cowan": "https://www.linkedin.com/in/cregg-cowan-12030a19/",
  "Danyal Fer": "https://www.linkedin.com/in/dan-fer-45807716/",
  "Brijen Thananjeyan": "https://bthananjeyan.github.io/",
  "Justin Kerr": "https://kerrj.github.io/",
  "Jeffrey Ichnowski": "https://ichnow.ski/",
  "Ryan Hoque": "https://ryanhoque.github.io/",
  "Lawrence Yunliang Chen": "https://yunliangchen.github.io/",
  "Satvik Sharma": "https://satvik1701.github.io/",
  "Pieter Abbeel": "https://people.eecs.berkeley.edu/~pabbeel/",
  "Baiyu Shi": "https://baiyu-shi.github.io/",
  "Huang Huang": "https://qingh097.github.io/",
  "Muyan Jiang": "https://jimmyjiang666.github.io/",
  "Yahav Avigal": "https://yahavigal.github.io/",
  "Kaiyuan Chen": "https://keplerc.github.io/",
  "Simeon Adebola": "https://simeonoa.github.io/",
  "Michael Danielczuk": "https://mjd3.github.io/",
  "Víctor Mayoral-Vilches": "https://www.linkedin.com/in/vmayoral/",
  "Nikhil Jha": "https://nikhiljha.com/",
  "Edith LLontop": "https://www.linkedin.com/in/edithllontop/",
  "Derek Xu": "https://www.linkedin.com/in/xzrderek/",
  "John Kubiatowicz": "https://people.eecs.berkeley.edu/~kubitron/",
  "Ion Stoica": "https://people.eecs.berkeley.edu/~istoica/",
  "Joseph Gonzalez": "https://people.eecs.berkeley.edu/~jegonzal/",
  "Masoud Moghani": "https://masoudmoghani.com/",
  "Qinxi Yu": "https://quincy-u.github.io/",
  "Kush Hari": "https://kushtimusprime.github.io/",
  "Animesh Garg": "https://animesh.garg.tech/",
  "Vincent Schorp": "https://www.linkedin.com/in/vschorp/",
  "Jingzhou Liu": "https://jasonjzliu.com/",
  "Mayank Mittal": "https://mayankm96.github.io/",
  "Hansoul Kim": "https://scholar.google.com/citations?hl=ko&user=_o39MgEAAAAJ",
  "Shreya Ganti": "https://www.linkedin.com/in/shreya-ganti-607763216/",
  "Tara Sadjadpour": "https://people.eecs.berkeley.edu/~tsadja/",
  "Chenfeng Xu": "https://www.chenfengx.com/",
  "Quan Vuong": "https://quanvuong.github.io/",
  "Zachary Tam": "https://www.linkedin.com/in/zach-tam/",
  "Tianshuang Qiu": "https://www.linkedin.com/in/ethantqiu/",
  "Zubair Irshad": "https://zubairirshad.com/",
  "Richard Cheng": "https://scholar.google.com/citations?user=d_Fpj0oAAAAJ",
  "Kurt Keutzer": "https://www2.eecs.berkeley.edu/Faculty/Homepages/keutzer.html",
  "Masayoshi Tomizuka": "https://me.berkeley.edu/people/masayoshi-tomizuka/",
  "Wenlong Huang": "https://wenlonghuang.com/",
  "Yanzhe Lyu": "https://yanzhelyu.github.io/",
  "Chen Geng": "https://chen-geng.com/",
  "Yunzhi Zhang": "https://cs.stanford.edu/~yzzhang/",
  "Hadi Alzayer": "https://hadizayer.github.io/",
  "Shangzhe Wu": "https://www.elliottwu.com/"
}

const authorNames = Object.keys(authorLinks).sort((a, b) => b.length - a.length);
const escapedNames = authorNames.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
const authorPattern = new RegExp(`(${escapedNames.join("|")})`, "g");

document.querySelectorAll(".publication-authors").forEach((authorList) => {
  const walker = document.createTreeWalker(authorList, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((textNode) => {
    if (textNode.parentElement.closest("a") || !authorPattern.test(textNode.textContent)) {
      authorPattern.lastIndex = 0;
      return;
    }

    authorPattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();

    textNode.textContent.split(authorPattern).forEach((part) => {
      const href = authorLinks[part];

      if (!href) {
        fragment.append(part);
        return;
      }

      const link = document.createElement("a");
      link.className = "author-link";
      link.href = href;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = part;
      fragment.append(link);
    });

    textNode.replaceWith(fragment);
  });
});
