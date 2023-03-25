
  /*            <div class="card shadow mb-2" > _divContainer
                        <div class="card-body"> _divBody
                              <div class="d-flex mb-3 align-items-center"> _divInfo
                                    <img class="rounded-circle border object-fit-cover me-3" src="https://i.pravatar.cc/" style="width:40px;">
                                    <span class="d-flex  flex-column">
                                    <h5 class="fs-6 fw-bold">Kurt James</h5>
                                    <span class="fs-6 fw-light">Feb 1 (13 hours ago)</span>
                                    </span>
                                </div>
                              <div> divTags
                                    <h1 class="card-title"><a href="">Playwright Tips From the Checkly Community</a> </h1>
                                    <ul class="list-tag__main">
                                        <li class="">#news</li>
                                        <li class="">#javascript</li>
                                        <li class="">#webdev</li>
                                        <li class="">#gatsby</li>
                                    </ul>
                              </div>
                              <div class="d-flex justify-content-between w-100"> divReactions
                                <div class="d-flex align-items-center" > divInfoReactions
                                    <span class="d-flex align-items-center me-3">
                                        <img src="../assets/heart-icon.svg" alt="">
                                        5 Reactions
                                    </span>
                                    <span class="d-flex align-items-center" >
                                        <img src="../assets/comment-icon.svg" alt="">
                                        6 Comments
                                    </span>
                                </div>
                            
                                <div> divCreationTime
                                    <span class="d-flex align-items-center">3 min <img src="../assets/save-icon.svg" alt=""></span>
                                </div>
                            </div>

                        </div>
                    </div>
                 */




  const postPrint = (
    imgSource,
    nameInfo,
    dateCreate,
    postTitle,
    postTags,
    postReactions,
    postComent,
    postTime
  ) => {
    let divContainer = document.createElement("div");
    divContainer.classList.add(..."card shadow mb-2".split(" "));

    let divBody = document.createElement("div");
    divBody.classList.add("card-body");

    let divInfo = document.createElement("div");
    divInfo.classList.add(..."d-flex mb-3 align-items-center".split(" "));

    let imgData = document.createElement("img");
    imgData.classList.add(
      ..."rounded-circle border object-fit-cover me-3".split(" ")
    );
    imgData.setAttribute("src", imgSource);
    imgData.setAttribute("style", "width:40px;");

    let spanName = document.createElement("span");
    spanName.classList.add(..."d-flex flex-column".split(" "));
    let h5Name = document.createElement("h5");
    h5Name.textContent = nameInfo;

    spanName.appendChild(h5Name);

    let spanDateCreate = document.createElement("span");
    spanDateCreate.textContent = dateCreate;

    divInfo.append(imgData, spanName, spanDateCreate);

    let divTags = document.createElement("div");

    let h1Title = document.createElement("h1");
    h1Title.classList.add("card-title");

    let anchor = document.createElement("a");
    anchor.textContent = postTitle;

    h1Title.appendChild(anchor);

    let ulTags = document.createElement("ul");
    ulTags.classList.add("list-tag__main");

    let liTag = document.createElement("li");
    liTag.textContent = postTags;

    ulTags.appendChild(liTag);

    divTags.append(h1Title, ulTags);

    let divReactions = document.createElement("div");
    divReactions.classList.add(
      ..."d-flex justify-content-between w-100".split(" ")
    );

    // let divInfoReactions = document.createElement("div");
    // divInfoReactions.classList.add(..."d-flex align-items-center".split(" "));

    // let spanReactions = document.createElement("span");
    // spanReactions.classList.add(..."d-flex align-items-center me-3".split(" "));
    // spanReactions.textContent = postReactions;

    // let imgReaction = document.createElement("img");
    // imgReaction.setAttribute("src", "../assets/heart-icon.svg");

    // spanReactions.appendChild(imgReaction);

    // let spanCommnets = document.createElement("span");
    // spanCommnets.textContent = postComent;

    // divInfoReactions.append(spanReactions, spanCommnets);

    let divCreationTime = document.createElement("div");

    let spanTime = document.createElement("span");
    spanTime.classList.add(..."d-flex align-items-center".split(" "));
    spanTime.textContent = postTime;

    let imageContent = document.createElement("img");
    imageContent.setAttribute("src", "../assets/save-icon.svg");

    spanTime.appendChild(imageContent);
    divCreationTime.appendChild(spanTime);

    divReactions.append( divCreationTime);

    divBody.append(divInfo, divTags, divCreationTime);
    divContainer.appendChild(divBody);

    return divContainer
  }

  export {postPrint }

